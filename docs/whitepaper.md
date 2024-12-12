### White Paper for **Field 2 Table (f2t.io)**  
**A Blockchain-Driven Marketplace Ecosystem with Dynamic NFT Access Control**

---

Field 2 Table (f2t.io) is a decentralized marketplace designed to connect local food producers with consumers while ensuring compliance with regulations such as Cottage Food Laws. This updated vision incorporates blockchain solutions for farm shares, enabling producers to sell regulated goods and facilitate out-of-state sales by legally restructuring the transaction model. By combining farm share proof on the blockchain with NFTs and AWS-based RBAC/ABAC, f2t.io provides a transparent, scalable, and legally compliant ecosystem.

---

#### **Introduction**  
Out-of-state sales and regulated goods like dairy, meats, and other perishable products are typically restricted under Cottage Food Laws. However, through farm share agreements, producers can legally extend their reach and offerings by allowing consumers to purchase "ownership" in their farm operations. Field 2 Table (f2t.io) integrates blockchain to provide transparent, immutable proof of farm shares, enabling compliance while broadening producer opportunities.

---
#### **Challenges in Current Marketplaces**  
1. **Compliance Gaps**: Existing platforms lack mechanisms to enforce location-based sales, transaction limits, and producer compliance.  
2. **Lack of Transparency**: Consumers cannot verify the origin or compliance of the goods they purchase.  
3. **Fragmented Access Systems**: Producers and regulators navigate multiple tools, leading to inefficiencies.  

#### **Field 2 Table (f2t.io)** addresses this gap by:  
- Employing blockchain for transparency and immutable compliance records.  
- Using NFTs to store dynamic user attributes for decentralized identity and access control.  
- Utilizing AWS RBAC/ABAC for secure, scalable access management.  

**Challenges in Out-of-State and Regulated Sales**
Legal Barriers: Direct sale of regulated goods like raw milk or meat products is often restricted across state lines.
Consumer Trust: Lack of transparency in farm share programs can deter consumers.
Complex Recordkeeping: Managing and tracking farm share agreements can be labor-intensive and prone to errors.

---

#### **Proposed Solution: Blockchain-Based Farm Shares**
By issuing digital proof of ownership via NFTs, f2t.io enables producers to sell farm shares that comply with legal frameworks for regulated goods and out-of-state transactions. Blockchain ensures transparency, traceability, and legal compliance while simplifying farm share management.

---

#### **How Farm Shares Work in f2t.io**
**Ownership Model:**
   - Consumers purchase a fractional share of a producer’s farm operation.
   - This share entitles them to a proportional amount of the farm’s products (e.g., raw milk, meat).

**Blockchain Integration:**
   -Farm shares are represented as NFTs with encoded attributes:
   - Ownership percentage.
   - Entitled product type and quantity.
   - Contract duration.

**Out-of-State Sales Framework:**
- By legally defining consumers as part-owners of the farm, the transaction bypasses restrictions on direct sales across state lines.
- Blockchain provides immutable proof of ownership and product entitlement.

---

#### **Key Features of Blockchain Farm Shares**
1. NFT-Based Proof of Ownership
   - Each farm share is minted as an NFT, with metadata encoding:
   - Ownership details.
   - Shareholder rights (e.g., product access).
   - Expiration or renewal terms.

2. Smart Contracts for Compliance
   - Enforce ownership rules, renewal schedules, and product distribution.
   - Automate legal agreements and ensure transparency in ownership terms.

3. Geolocation Verification
   - Validate consumer location to ensure compliance with any additional state-specific laws.

4. Regulated Goods Distribution
   - Distribute regulated goods under the farm share framework while providing blockchain-backed proof of compliance.


---

#### **Field 2 Table (f2t.io): The Solution**  

Field 2 Table integrates blockchain, NFTs, and AWS infrastructure to create a seamless, transparent, and legally compliant marketplace.  

---

#### **Key Features**

1. **NFT-Based Attribute Storage**  
   - Each producer, consumer, and regulator is issued an NFT upon onboarding.  
   - **Metadata Includes**:
     - Role: Producer, Consumer, Administrator, Auditor.
     - Compliance Status: Verified status under Cottage Food Laws.
     - Geolocation: Legal regions for sales.
     - Transaction Cap: Annual revenue limits for producers.
     - Dynamic Attributes: Updated for real-time compliance and contextual access.  

2. **AWS RBAC and ABAC Hybrid**  
   - **RBAC**: Defines core roles and their baseline permissions.  
   - **ABAC**: Leverages NFT metadata as dynamic attributes for fine-grained access control.  
   - Example:  
     - A producer can access their own sales data but cannot exceed transaction caps or modify compliance records.  
     - Consumers can browse products within their geographic region.  

3. **Blockchain-Powered Transparency**  
   - Immutable transaction logs ensure regulatory compliance and consumer trust.  
   - Smart contracts enforce proximity-based transactions and sales limits.  

4. **Geolocation Verification**  
   - Confirms the proximity of buyers and sellers, ensuring direct-to-consumer compliance.  
   - Automatically restricts access to products outside a legal sales radius.  

5. **Delivery and Payment Validation**  
   - QR codes or digital signatures confirm in-person delivery, logged immutably on the blockchain.  
   - Supports fiat and cryptocurrency payments for user flexibility.  

---

#### **How it Works**

**Onboarding**  
1. Producers and consumers register on f2t.io.  
2. An NFT module layer is minted for each user, encoding their role and attributes.

**Transaction Workflow**  
1. **Step 1**: A consumer places an order on the platform.  
2. **Step 2**: The system verifies compliance:
   - Consumer location matches producer’s allowed region.
   - Producer’s transaction cap is within limits.
3. **Step 3**: Producer fulfills the order, and the consumer confirms receipt via QR code or digital signature.  
4. **Step 4**: The transaction is logged on the blockchain, ensuring transparency and compliance.  

**Regulator Oversight**  
1. Regulators access immutable logs via read-only access.  
2. NFT attributes ensure that regulators only view data for their jurisdiction.  

---

#### **Enhanced Technology Stack**

1. **Blockchain Layer**  
   - **Blockchain**: Solana, Cosmos, or MultiVerseX for smart contracts and NFT minting.  
   - **Smart Contracts**: Enforce legal restrictions dynamically w/ Automate compliance checks and enforce share ownership rules.

2. **NFT Infrastructure**  
   - Minting and managing dynamic NFTs with metadata that updates via off-chain events (e.g., compliance checks).  

3. **AWS Backend**  
   - **RBAC**: Assigns baseline permissions based on roles. Producers, consumers, and regulators interact with the system based on roles and attributes.
   - **ABAC**: Uses NFT metadata as session attributes for dynamic, fine-grained access control.  Attributes include farm share ownership data stored in NFTs.

4. **Geolocation APIs**  
   - Ensure location-based compliance.  

5. **User Interface**  
   - Web and mobile apps provide an intuitive experience while abstracting technical complexity.  
   - Consumers view their farm shares and entitled products in a clean, intuitive dashboard.
   - Producers manage shareholder agreements and product distributions seamlessly.

6. **Off-Chain Synchronization**
   - Updates to share agreements or product deliveries are recorded off-chain but linked to the on-chain NFT metadata.
---

#### **Workflow for Farm Share Sales**
**Onboarding:**
   - Producers list farm share opportunities (e.g., 100 shares for raw milk access).
   - Consumers purchase shares via fiat or cryptocurrency, minting an NFT representing their ownership.

**Proof of Ownership:**
   - NFT metadata includes ownership details, product entitlements, and compliance terms.
   - Blockchain provides immutable proof of the agreement.

**Product Distribution:**
   - Shareholders receive periodic deliveries or pickups of their entitled products.
   - Producers log deliveries on-chain for transparency and auditability.

**Renewals and Transfers:**
   - Smart contracts handle renewals or allow consumers to transfer their farm shares to others.

---

#### **Revenue Model**

1. **Transaction Fees**: 
   - A percentage fee on each sale and or farm share purchase.  
2. **Subscription Plans**: 
   - Premium features for producers, such as analytics or priority listing.  
   - Producers pay for advanced management tools, such as automated distribution tracking.
3. **Advertising**: 
   - Local businesses can advertise on the platform.  
   - Fees on the resale or transfer of farm shares between consumers.

---

#### **Advantages**

1. **For Producers**  
   - Simplified compliance through automated checks.  
   - Wider reach within legal limits.  
   - Expand market reach, including out-of-state sales, while staying compliant.
   - Simplify farm share management with automated smart contracts and blockchain records.

2. **For Consumers**  
   - Transparent product origins and compliance.  
   - Seamless purchasing experience.  
   - Gain access to regulated goods through transparent and legally compliant ownership.
   - View and verify their farm share holdings on an immutable blockchain ledger.

3. **For Regulators**  
   - Immutable blockchain logs for auditing.  
   - Fine-grained access control for jurisdictional oversight.  
   - Use blockchain for auditing farm share agreements and product distributions.
   - Ensure compliance without the burden of manual recordkeeping.


---

#### **Implementation Roadmap**

1. **Phase 1**: Develop blockchain and NFT infrastructure.  
2. **Phase 2**: Build AWS-based backend with RBAC and ABAC integration.  
3. **Phase 3**: Launch beta in Michigan to test compliance mechanisms.  
4. **Phase 4**: Expand to other states and adapt for international markets.  

---

#### **Challenges and Mitigation**

1. **Legal Uncertainty**  
   - Engage with regulators early to ensure compliance.
   - Collaborate with legal experts to ensure farm share agreements comply with federal and state laws.
2. **Consumer Adoption**  
   - Educate users about NFTs and blockchain benefits.  
   - Provide educational resources on how farm shares work and their legal basis.
3. **Scalability**  
   - Use AWS infrastructure to handle growth while offloading dynamic NFT updates to an efficient off-chain mechanism.  
   - Use AWS infrastructure to handle growth and off-chain metadata updates efficiently.

---

#### **Future Vision**  
Field 2 Table (f2t.io) aims to become a global standard for blockchain-enabled local marketplaces. By integrating IoT devices for freshness tracking and machine learning for personalized insights, f2t.io will continually enhance user experience and operational efficiency.
Field 2 Table (f2t.io) envisions a comprehensive ecosystem where local producers can seamlessly manage their operations and expand their reach while maintaining transparency and compliance. Blockchain-enabled farm shares represent a pivotal step toward this vision, unlocking new revenue streams and opportunities for producers and consumers alike.

---

Field 2 Table (f2t.io) integrates blockchain, NFTs, and farm share frameworks to redefine how regulated goods and out-of-state sales can be conducted legally. By leveraging decentralized technology for transparency and compliance, the platform creates a trusted, scalable, and consumer-centric solution for the future of local food commerce.
