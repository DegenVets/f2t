### White Paper for **Field 2 Table (f2t.io)**  
**A Blockchain-Driven Marketplace Ecosystem with Dynamic NFT Access Control**

---

Field 2 Table (f2t.io) is a blockchain-based decentralized online marketplace connecting local food producers and consumers while ensuring compliance with regulations such as Cottage Food Laws. The platform integrates **Dynamic Attribute-Based Control (ABAC)** with **Role-Based Access Control (RBAC)** to provide robust access management, leveraging **NFTs as attribute carriers** and AWS for secure backend infrastructure. By combining these technologies, f2t.io creates a transparent, compliant, and scalable marketplace ecosystem.

---

#### **Introduction**  
Local food producers face challenges in scaling their operations within the constraints of legal regulations like Cottage Food Laws. These laws often mandate direct-to-consumer sales, restrict transaction limits, and enforce compliance at local levels. Traditional online platforms fail to address these unique challenges, creating a gap for a tailored solution.  

**Field 2 Table (f2t.io)** addresses this gap by:  
- Employing blockchain for transparency and immutable compliance records.  
- Using NFTs to store dynamic user attributes for decentralized identity and access control.  
- Utilizing AWS RBAC/ABAC for secure, scalable access management.  

---

#### **Challenges in Current Marketplaces**  
1. **Compliance Gaps**: Existing platforms lack mechanisms to enforce location-based sales, transaction limits, and producer compliance.  
2. **Lack of Transparency**: Consumers cannot verify the origin or compliance of the goods they purchase.  
3. **Fragmented Access Systems**: Producers and regulators navigate multiple tools, leading to inefficiencies.  

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

#### **Technology Stack**

1. **Blockchain Layer**  
   - **Blockchain**: Ethereum, Polygon, or Solana for smart contracts and NFT minting.  
   - **Smart Contracts**: Enforce legal restrictions dynamically.  

2. **NFT Infrastructure**  
   - Minting and managing dynamic NFTs with metadata that updates via off-chain events (e.g., compliance checks).  

3. **AWS Backend**  
   - **RBAC**: Assigns baseline permissions based on roles.  
   - **ABAC**: Uses NFT metadata as session attributes for dynamic, fine-grained access control.  

4. **Geolocation APIs**  
   - Ensure location-based compliance.  

5. **User Interface**  
   - Web and mobile apps provide an intuitive experience while abstracting technical complexity.  

---

#### **Revenue Model**

1. **Transaction Fees**: A percentage fee on each sale.  
2. **Subscription Plans**: Premium features for producers, such as analytics or priority listing.  
3. **Advertising**: Local businesses can advertise on the platform.  

---

#### **Advantages**

1. **For Producers**  
   - Simplified compliance through automated checks.  
   - Wider reach within legal limits.  

2. **For Consumers**  
   - Transparent product origins and compliance.  
   - Seamless purchasing experience.  

3. **For Regulators**  
   - Immutable blockchain logs for auditing.  
   - Fine-grained access control for jurisdictional oversight.  

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
2. **Consumer Adoption**  
   - Educate users about NFTs and blockchain benefits.  
3. **Scalability**  
   - Use AWS infrastructure to handle growth while offloading dynamic NFT updates to an efficient off-chain mechanism.  

---

#### **Future Vision**  
Field 2 Table (f2t.io) aims to become a global standard for blockchain-enabled local marketplaces. By integrating IoT devices for freshness tracking and machine learning for personalized insights, f2t.io will continually enhance user experience and operational efficiency.

---

Field 2 Table (f2t.io) combines the transparency of blockchain, the flexibility of NFTs, and the security of AWS RBAC/ABAC to create a compliant, scalable, and user-centric marketplace. This innovative ecosystem addresses the challenges of local food commerce, empowering producers, consumers, and regulators alike.
