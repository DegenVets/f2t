# Field 2 Table (f2t.io) Access Control Matrix

```
graph TB
    subgraph NFT_Layer["NFT Access Layer"]
        P_NFT[Producer NFT]
        C_NFT[Consumer NFT]
        A_NFT[Auditor NFT]
        S_NFT[Share NFT]
    end

    subgraph Attributes["Dynamic Attributes"]
        Role[Role]
        Compliance[Compliance Status]
        Geo[Geographic Bounds]
        Limits[Transaction Limits]
        Time[Time Restrictions]
    end

    subgraph Programs["Solana Programs"]
        Access[Access Control Program]
        Verify[Verification Program]
        Share[Share Management]
        Distribute[Distribution Control]
    end

    subgraph Actions["Permitted Actions"]
        Create[Create Shares]
        Purchase[Purchase Shares]
        Transfer[Transfer Shares]
        Audit[Audit Records]
    end

    %% NFT connections to attributes
    P_NFT --> Role
    P_NFT --> Compliance
    P_NFT --> Geo
    P_NFT --> Limits
    
    C_NFT --> Role
    C_NFT --> Geo
    
    A_NFT --> Role
    A_NFT --> Geo
    
    S_NFT --> Limits
    S_NFT --> Time

    %% Program validations
    Access --> Role
    Access --> Compliance
    
    Verify --> Geo
    Verify --> Limits
    
    Share --> Time
    Share --> Limits
    
    Distribute --> Compliance
    Distribute --> Geo

    %% Action permissions
    Role --> Create
    Role --> Purchase
    Role --> Transfer
    Role --> Audit
    
    Compliance --> Create
    Compliance --> Purchase
    
    Geo --> Purchase
    Geo --> Transfer
    
    Limits --> Create
    Limits --> Purchase

    %% Styling
    classDef nft fill:#f9f,stroke:#333,stroke-width:2px
    classDef attr fill:#bbf,stroke:#333,stroke-width:2px
    classDef prog fill:#bfb,stroke:#333,stroke-width:2px
    classDef action fill:#fbb,stroke:#333,stroke-width:2px

    class P_NFT,C_NFT,A_NFT,S_NFT nft
    class Role,Compliance,Geo,Limits,Time attr
    class Access,Verify,Share,Distribute prog
    class Create,Purchase,Transfer,Audit action
```

## Role-Based Access Matrix

| Resource/Action              | Producer | Consumer | Auditor | Admin | System |
|-----------------------------|----------|----------|---------|--------|---------|
| **NFT Management**          |          |          |         |        |         |
| Mint Producer NFT           |    -     |    -     |    -    |   RW   |   RW    |
| Mint Consumer NFT           |    -     |    -     |    -    |   RW   |   RW    |
| Mint Share NFT              |   RW     |    -     |    -    |   RW   |   RW    |
| Update NFT Attributes       |    -     |    -     |   RW    |   RW   |   RW    |
| **Farm Shares**             |          |          |         |        |         |
| Create Share Offering       |   RW     |    -     |    -    |    -   |   RW    |
| Purchase Share              |    -     |   RW     |    -    |    -   |   RW    |
| Transfer Share              |    -     |   RW     |    -    |    -   |   RW    |
| View Share Details          |    R     |    R     |    R    |    R   |   R     |
| **Compliance**              |          |          |         |        |         |
| Submit Verification         |   RW     |    -     |    -    |    -   |   RW    |
| Update Compliance Status    |    -     |    -     |   RW    |   RW   |   RW    |
| View Compliance Records     |    R     |    -     |    R    |    R   |   R     |
| **Products**                |          |          |         |        |         |
| Create Product Listing      |   RW     |    -     |    -    |    -   |   RW    |
| Update Product Details      |   RW     |    -     |    -    |    -   |   RW    |
| View Product Catalog        |    R     |    R     |    R    |    R   |   R     |
| **Transactions**            |          |          |         |        |         |
| Process Transaction         |    R     |   RW     |    -    |    -   |   RW    |
| View Own Transactions       |    R     |    R     |    -    |    R   |   R     |
| View All Transactions       |    -     |    -     |    R    |    R   |   R     |
| **Content Storage**         |          |          |         |        |         |
| Upload to NFT.storage       |   RW     |    -     |    -    |   RW   |   RW    |
| View IPFS Content          |    R     |    R     |    R    |    R   |   R     |
| Update Content Metadata     |   RW     |    -     |    -    |   RW   |   RW    |

## Permission Legend:
- R: Read
- W: Write
- RW: Read and Write
- -: No Access

## Additional Access Controls

### Geographic Restrictions
| Region Type | Producer | Consumer | Compliance Range |
|-------------|----------|----------|------------------|
| Local       | Full     | Full     | Same State       |
| Interstate  | Limited* | Limited* | Cross-State      |
| National    | -        | -        | Federal Level    |

*Requires farm share verification

### Transaction Limits
| Transaction Type | Producer Cap | Consumer Cap | Time Period |
|-----------------|--------------|--------------|-------------|
| Direct Sale     | $75,000      | N/A          | Annual      |
| Farm Share      | Unlimited*   | N/A          | N/A         |
| Interstate      | Verified Only| Share Only   | N/A         |

*Subject to compliance verification

### Time-Based Restrictions
| Action Type | Restriction Period | Verification Requirement |
|-------------|-------------------|------------------------|
| Listing     | Business Hours    | None                   |
| Purchase    | 24/7             | NFT Ownership          |
| Compliance  | Business Hours    | Auditor NFT           |

### Conditional Access Rules

1. **Producer Conditions**
   - Must maintain verified status
   - Must stay within transaction caps
   - Must comply with geographic restrictions

2. **Consumer Conditions**
   - Must hold valid NFT
   - Must be within allowed geographic range
   - Must hold appropriate farm share for restricted products

3. **Auditor Conditions**
   - Must have jurisdiction for region
   - Must maintain active credentials
   - Access limited to assigned regions

4. **System Conditions**
   - Must validate all NFT attributes
   - Must verify geographic compliance
   - Must maintain audit trail

   ---

   # Role-Based Access Control Matrix (RBAC)

## 1. Subjects (Roles)

### Producer (P)
```rust
struct ProducerSubject {
    role_id: "producer",
    attributes: {
        compliance_status: bool,
        jurisdiction: Vec<String>,
        transaction_cap: u64,
        verification_level: VerificationLevel
    }
}
```

### Consumer (C)
```rust
struct ConsumerSubject {
    role_id: "consumer",
    attributes: {
        region: String,
        verification_status: bool,
        share_ownership: Vec<ShareId>
    }
}
```

### Auditor (A)
```rust
struct AuditorSubject {
    role_id: "auditor",
    attributes: {
        jurisdiction: Vec<String>,
        agency: String,
        audit_level: AuditLevel
    }
}
```

### System (S)
```rust
struct SystemSubject {
    role_id: "system",
    attributes: {
        permission_level: AccessLevel,
        system_type: SystemType
    }
}
```

## 2. Objects (Resources)

### Farm Share (FS)
```rust
struct FarmShareObject {
    object_id: "farm_share",
    attributes: {
        share_type: ShareType,
        region: String,
        compliance_level: ComplianceLevel,
        interstate_eligible: bool
    }
}
```

### Product (PR)
```rust
struct ProductObject {
    object_id: "product",
    attributes: {
        product_type: ProductType,
        regulatory_class: RegClass,
        geographic_restrictions: Vec<String>
    }
}
```

### Compliance Record (CR)
```rust
struct ComplianceObject {
    object_id: "compliance",
    attributes: {
        record_type: RecordType,
        jurisdiction: String,
        sensitivity_level: SensitivityLevel
    }
}
```

### Content (CN)
```rust
struct ContentObject {
    object_id: "content",
    attributes: {
        content_type: ContentType,
        storage_type: StorageType,
        access_level: AccessLevel
    }
}
```

## 3. Operations Matrix

| Subject → Object | Farm Share (FS) | Product (PR) | Compliance Record (CR) | Content (CN) |
|-----------------|-----------------|--------------|----------------------|--------------|
| Producer (P)    | Create, Read, Transfer | Create, Read, Update | Read Own | Create, Read, Update |
| Consumer (C)    | Purchase, Read, Transfer | Read, Purchase | Read Own | Read |
| Auditor (A)     | Read | Read | Create, Read, Update | Read |
| System (S)      | Full Access | Full Access | Full Access | Full Access |

## 4. Attribute-Based Rules

### Producer Rules
```rust
impl ProducerAccess {
    fn can_create_share(&self, share: FarmShareObject) -> bool {
        self.attributes.compliance_status == true &&
        share.attributes.region in self.attributes.jurisdiction &&
        self.attributes.transaction_cap > share.value
    }

    fn can_update_product(&self, product: ProductObject) -> bool {
        product.attributes.regulatory_class in self.attributes.verification_level &&
        product.attributes.geographic_restrictions in self.attributes.jurisdiction
    }
}
```

### Consumer Rules
```rust
impl ConsumerAccess {
    fn can_purchase_share(&self, share: FarmShareObject) -> bool {
        self.attributes.region in share.attributes.geographic_restrictions &&
        self.attributes.verification_status == true
    }

    fn can_access_product(&self, product: ProductObject) -> bool {
        self.attributes.share_ownership.contains(product.required_share) &&
        self.attributes.region in product.attributes.geographic_restrictions
    }
}
```

### Auditor Rules
```rust
impl AuditorAccess {
    fn can_access_compliance(&self, record: ComplianceObject) -> bool {
        record.attributes.jurisdiction in self.attributes.jurisdiction &&
        self.attributes.audit_level >= record.attributes.sensitivity_level
    }

    fn can_update_compliance(&self, record: ComplianceObject) -> bool {
        self.can_access_compliance(record) &&
        self.attributes.agency == record.attributes.regulatory_agency
    }
}
```

## 5. Access Control Function

```rust
fn check_access(
    subject: impl Subject,
    object: impl Object,
    operation: Operation,
    context: AccessContext
) -> Result<bool, AccessError> {
    // 1. Check basic role permission
    if !OPERATIONS_MATRIX[subject.role_id][object.object_id].contains(operation) {
        return Err(AccessError::InsufficientPermissions);
    }

    // 2. Verify attributes
    match subject.role_id {
        "producer" => {
            check_producer_attributes(subject, object, operation, context)?;
        },
        "consumer" => {
            check_consumer_attributes(subject, object, operation, context)?;
        },
        "auditor" => {
            check_auditor_attributes(subject, object, operation, context)?;
        },
        "system" => {
            // System has full access if role check passed
            return Ok(true);
        },
        _ => return Err(AccessError::InvalidRole),
    }

    // 3. Check contextual rules
    check_contextual_rules(subject, object, operation, context)?;

    Ok(true)
}
```

## 6. Context Rules

```rust
struct AccessContext {
    timestamp: i64,
    geographic_location: Location,
    network_security_level: SecurityLevel,
    transaction_context: Option<TransactionContext>
}

fn check_contextual_rules(
    subject: impl Subject,
    object: impl Object,
    operation: Operation,
    context: AccessContext
) -> Result<(), AccessError> {
    // Time-based restrictions
    check_time_restrictions(operation, context.timestamp)?;

    // Geographic restrictions
    check_geographic_rules(subject, object, context.geographic_location)?;

    // Network security requirements
    check_security_level(object, context.network_security_level)?;

    // Transaction-specific rules
    if let Some(tx_context) = context.transaction_context {
        check_transaction_rules(subject, object, tx_context)?;
    }

    Ok(())
}
```