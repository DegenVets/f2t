# United States Cottage Food Law Matrix
## State-by-State Regulatory Framework

### Regulatory Matrix

| State | Annual Sales Limit | Registration Required | Farm Share Enabled | Venue Restrictions | Labels Required | Home Kitchen | Interstate Sales |
|-------|-------------------|----------------------|-------------------|-------------------|----------------|--------------|-----------------|
| Alabama | $20,000 | No | Yes* | Direct only | Yes | Yes | No |
| Alaska | No limit | No | Yes | Direct only | Yes | Yes | No |
| Arizona | No limit | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Arkansas | $50,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| California | $50,000-$150,000** | Yes | Yes* | Direct + Retail** | Yes | Yes** | No |
| Colorado | No limit | No | Yes* | Direct only | Yes | Yes | No |
| Connecticut | $25,000 | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Delaware | $25,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| Florida | $250,000 | No | Yes* | Direct only | Yes | Yes | No |
| Georgia | No limit | Yes | Yes* | Direct only | Yes | Yes | No |
| Hawaii | $50,000 | Yes | Limited | Direct only | Yes | Yes | No |
| Idaho | No limit | No | Yes | Direct only | Yes | Yes | No |
| Illinois | $1,000/month | Yes | Yes* | Direct only | Yes | Yes | No |
| Indiana | $50,000 | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Iowa | No limit | Yes | Yes* | Direct only | Yes | Yes | No |
| Kansas | No limit | No | Yes | Direct only | Yes | Yes | No |
| Kentucky | $60,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| Louisiana | No limit | No | Yes* | Direct only | Yes | Yes | No |
| Maine | $25,000 | Yes | Yes* | Direct + Retail | Yes | Yes | Limited* |
| Maryland | $25,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| Massachusetts | $25,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| Michigan | $25,000 | No | Yes* | Direct only | Yes | Yes | No |
| Minnesota | $78,000 | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Mississippi | $35,000 | No | Yes* | Direct only | Yes | Yes | No |
| Missouri | No limit | No | Yes | Direct only | Yes | Yes | No |
| Montana | No limit | No | Yes | Direct only | Yes | Yes | No |
| Nebraska | $25,000 | No | Yes* | Direct only | Yes | Yes | No |
| Nevada | $35,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| New Hampshire | $50,000 | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| New Jersey | $50,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| New Mexico | No limit | No | Yes | Direct only | Yes | Yes | No |
| New York | $50,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| North Carolina | No limit | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| North Dakota | $35,000 | No | Yes* | Direct only | Yes | Yes | No |
| Ohio | $20,000 | No | Yes* | Direct only | Yes | Yes | No |
| Oklahoma | $75,000 | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Oregon | No limit | Yes | Yes* | Direct only | Yes | Yes | No |
| Pennsylvania | No limit | Yes | Yes* | Direct only | Yes | Yes | No |
| Rhode Island | $50,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| South Carolina | No limit | Yes | Yes* | Direct only | Yes | Yes | No |
| South Dakota | No limit | No | Yes | Direct only | Yes | Yes | No |
| Tennessee | $100,000 | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Texas | No limit | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Utah | No limit | Yes | Yes* | Direct + Retail | Yes | Yes | No |
| Vermont | $50,000 | Yes | Yes* | Direct + Retail | Yes | Yes | Limited* |
| Virginia | $50,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| Washington | $25,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| West Virginia | No limit | Yes | Yes* | Direct only | Yes | Yes | No |
| Wisconsin | $5,000 | Yes | Yes* | Direct only | Yes | Yes | No |
| Wyoming | No limit | No | Yes | Direct only | Yes | Yes | No |

*With additional licensing/requirements
**Tiered system with different requirements

### Notes

1. **Farm Share Enabled**: 
- "Yes*" indicates farm share model is possible with additional licensing
- Requirements vary by state and product type

2. **Venue Restrictions**:
- "Direct only" = Farmers markets, home, roadside stands
- "Direct + Retail" = Also allows limited retail and wholesale

3. **Product Categories by State**

Most states allow:
- Baked goods (shelf-stable)
- Candies
- Jams and jellies
- Dried herbs
- Dry mixes

Common restrictions:
- Meat products (requires USDA)
- Dairy products (requires licensing)
- Canned vegetables (pH requirements)
- Fermented products (special permits)

4. **Label Requirements**
Common requirements across states:
- Producer name and address
- Product name
- Ingredients list
- Net weight
- Production date
- "Homemade" disclaimer
- Allergen information

5. **Special Considerations**

Farm Share Model Requirements:
```rust
pub struct FarmShareRequirements {
    // Basic Requirements
    business_registration: bool,
    facility_inspection: bool,
    food_safety_training: bool,

    // Licensing
    license_types: Vec<String>,
    annual_review: bool,
    
    // Product Specific
    dairy_requirements: Option<DairyRegs>,
    meat_requirements: Option<MeatRegs>,
    produce_requirements: Option<ProduceRegs>,
    
    // Interstate Commerce
    interstate_allowed: bool,
    additional_permits: Vec<String>
}
```

6. **Implementation Guidelines**

```rust
impl CottageFoodCompliance {
    pub fn verify_state_compliance(
        &self,
        state: &str,
        product_type: ProductType,
        sales_amount: u64,
        venue_type: VenueType,
    ) -> Result<bool, ComplianceError> {
        // Get state-specific limits
        let state_regs = self.get_state_regulations(state)?;
        
        // Check sales limits
        if let Some(limit) = state_regs.annual_sales_limit {
            if sales_amount > limit {
                return Err(ComplianceError::SalesLimitExceeded);
            }
        }
        
        // Verify venue eligibility
        if !state_regs.allowed_venues.contains(&venue_type) {
            return Err(ComplianceError::VenueNotAllowed);
        }
        
        // Check product restrictions
        if !state_regs.allowed_products.contains(&product_type) {
            return Err(ComplianceError::ProductNotAllowed);
        }
        
        Ok(true)
    }
}
```

7. **Registration Requirements**

```rust
pub struct RegistrationRequirements {
    state: String,
    requirements: Vec<Requirement>,
    renewal_period: Duration,
    inspection_type: InspectionType,
    fees: Option<Fee>,
    training_required: bool
}
```

8. **Interstate Commerce**

Special considerations for states allowing limited interstate sales:
- Maine and Vermont have specific agreements
- Farm share model may enable broader distribution
- Additional licensing/permits required
- Product-specific restrictions apply


# Access Control Matrix

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

### EXAMPLE Transaction Limits
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