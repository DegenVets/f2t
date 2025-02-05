    # Field 2 Table Access Control Model (F2T-ACM)
## NFT-Based Dynamic Access Control Specification

## Overview

The F2T Access Control Model implements a dynamic, attribute-based access control system using NFTs as carriers for permissions and attributes. This model combines role-based access control (RBAC) with attribute-based access control (ABAC) through Solana programs.

## 1. NFT Token Types

### 1.1 Producer NFT
```rust
#[derive(Accounts)]
pub struct ProducerNFT {
    pub role: String,              // "producer"
    pub compliance_status: bool,   // verification status
    pub jurisdiction: Vec<String>, // allowed regions
    pub transaction_cap: u64,      // annual limit
    pub timestamp: i64,           // last updated
}
```

### 1.2 Consumer NFT
```rust
#[derive(Accounts)]
pub struct ConsumerNFT {
    pub role: String,              // "consumer"
    pub region: String,            // location
    pub verified: bool,            // identity verification
    pub timestamp: i64,           // last updated
}
```

### 1.3 Auditor NFT
```rust
#[derive(Accounts)]
pub struct AuditorNFT {
    pub role: String,              // "auditor"
    pub jurisdiction: Vec<String>, // oversight regions
    pub agency: String,           // regulatory body
    pub timestamp: i64,           // last updated
}
```

### 1.4 Share NFT
```rust
#[derive(Accounts)]
pub struct ShareNFT {
    pub share_type: String,        // type of share
    pub quantity: u64,             // share amount
    pub valid_until: i64,          // expiration
    pub region: String,            // geographic bounds
    pub transfer_allowed: bool,    // transferability
}
```

## 2. Dynamic Attributes

### 2.1 Role Attributes
```rust
#[derive(AnchorSerialize, AnchorDeserialize)]
pub enum Role {
    Producer {
        permissions: Vec<Permission>,
        limits: TransactionLimits,
    },
    Consumer {
        permissions: Vec<Permission>,
    },
    Auditor {
        permissions: Vec<Permission>,
        scope: Vec<String>,
    }
}
```

### 2.2 Compliance Attributes
```rust
#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct ComplianceStatus {
    pub verified: bool,
    pub last_check: i64,
    pub restrictions: Vec<String>,
    pub requirements: Vec<String>,
}
```

### 2.3 Geographic Bounds
```rust
#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct GeographicBounds {
    pub allowed_regions: Vec<String>,
    pub restrictions: Vec<String>,
    pub cross_border: bool,
}
```

## 3. Access Control Programs

### 3.1 Validation Program
```rust
pub mod validation_program {
    use super::*;

    #[program]
    pub fn validate_access(
        ctx: Context<ValidateAccess>,
        action: Action,
        attributes: Vec<Attribute>
    ) -> Result<bool> {
        // Validation logic
    }
}
```

### 3.2 Share Management
```rust
pub mod share_program {
    use super::*;

    #[program]
    pub fn manage_share(
        ctx: Context<ShareManagement>,
        action: ShareAction,
        share_details: ShareDetails
    ) -> Result<()> {
        // Share management logic
    }
}
```

## 4. Permission Matrix

| Action                | Producer | Consumer | Auditor |
|----------------------|----------|----------|---------|
| Create Share         | ✓        |          |         |
| Purchase Share       |          | ✓        |         |
| Transfer Share       |          | ✓        |         |
| View Transactions    | ✓*       | ✓*       | ✓       |
| Update Compliance    |          |          | ✓       |
| Modify Listings      | ✓        |          |         |

*Limited to own transactions

## 5. Validation Rules

### 5.1 Share Creation
```rust
pub fn validate_share_creation(
    producer: &ProducerNFT,
    share: &ShareDetails
) -> Result<bool> {
    // Producer must be verified
    if !producer.compliance_status {
        return Err(ErrorCode::UnverifiedProducer.into());
    }

    // Share must be within transaction cap
    if share.value > producer.transaction_cap {
        return Err(ErrorCode::ExceedsTransactionCap.into());
    }

    // Geographic validation
    if !producer.jurisdiction.contains(&share.region) {
        return Err(ErrorCode::InvalidRegion.into());
    }

    Ok(true)
}
```

### 5.2 Share Purchase
```rust
pub fn validate_share_purchase(
    consumer: &ConsumerNFT,
    share: &ShareNFT
) -> Result<bool> {
    // Region validation
    if !is_valid_region(consumer.region, &share.region) {
        return Err(ErrorCode::RegionMismatch.into());
    }

    // Share availability
    if !share.is_available() {
        return Err(ErrorCode::ShareUnavailable.into());
    }

    Ok(true)
}
```

## 6. State Transitions

### 6.1 NFT State Updates
```rust
pub fn update_nft_state(
    nft: &mut NFTState,
    update: StateUpdate
) -> Result<()> {
    match update {
        StateUpdate::Compliance(status) => {
            nft.compliance_status = status;
            nft.timestamp = Clock::get()?.unix_timestamp;
        },
        StateUpdate::Region(region) => {
            nft.jurisdiction.push(region);
            nft.timestamp = Clock::get()?.unix_timestamp;
        },
        // Other state updates
    }
    Ok(())
}
```

## 7. Error Handling

```rust
#[error_code]
pub enum AccessControlError {
    #[msg("Invalid NFT")]
    InvalidNFT,
    
    #[msg("Insufficient permissions")]
    InsufficientPermissions,
    
    #[msg("Geographic restriction")]
    GeographicRestriction,
    
    #[msg("Compliance verification required")]
    ComplianceRequired,
    
    #[msg("Transaction cap exceeded")]
    TransactionCapExceeded,
}
```

## 8. Security Considerations

### 8.1 NFT Verification
- Signature verification for all NFT operations
- Timestamp validation for state updates
- Cross-program invocation (CPI) security

### 8.2 State Protection
- Program-derived addresses (PDAs) for state accounts
- Atomic transactions for state updates
- Authority validation for administrative actions

### 8.3 Geographic Validation
- Multi-factor location verification
- Region-based access restrictions
- Cross-border transaction validation