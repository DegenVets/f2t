### Workflow Examples and Assets-Based Design for **Field 2 Table (f2t.io)**

Here’s how the workflows and assets interact in the **Field 2 Table (f2t.io)** ecosystem, focusing on **farm shares**, **regulated goods**, and **out-of-state sales** with blockchain-based compliance.

---

### **Workflow Examples**

#### **1. Farm Share Purchase and Management**
**Objective**: Enable consumers to purchase farm shares for access to regulated goods while maintaining legal compliance.

**Actors**:
- **Producer**: A farmer or baker selling farm shares.
- **Consumer**: A buyer interested in owning a share of the producer’s goods.
- **Regulator**: Monitors transactions and compliance.

**Steps**:
1. **Farm Share Listing**:
   - Producer creates a listing for farm shares (e.g., "Raw Milk Farm Shares: 50 shares available").
   - Each share entitles the consumer to 1 gallon of raw milk per week.

2. **NFT Minting**:
   - When a consumer purchases a share, an NFT is minted as proof of ownership.
   - NFT Metadata:
     - Share Details: Ownership percentage, entitled goods (e.g., 1 gallon/week).
     - Compliance Data: Expiration date, producer’s compliance ID.

3. **Product Fulfillment**:
   - Producer logs each delivery on the blockchain.
   - Consumer confirms receipt via QR code or digital signature.

4. **Renewal or Transfer**:
   - At the end of the term, the smart contract triggers a renewal request or allows the consumer to transfer the NFT to another party.

**Assets Involved**:
- **Farm Share NFTs**: Digital proof of ownership.
- **Smart Contracts**: Automate renewal, delivery logging, and compliance checks.
- **Blockchain Ledger**: Stores immutable records of transactions.

---

#### **2. Out-of-State Sale of Regulated Goods**
**Objective**: Allow producers to sell regulated goods across state lines through farm share ownership.

**Actors**:
- **Producer**: A farmer selling products like raw milk or meat.
- **Consumer**: A buyer located out of state.
- **Regulator**: Ensures the sale complies with legal frameworks.

**Steps**:
1. **Farm Share Creation**:
   - Producer offers farm shares with explicit terms (e.g., "Out-of-state shareholders entitled to monthly shipments of 5 pounds of ground beef").

2. **Smart Contract Validation**:
   - Consumer’s location is verified through geolocation.
   - Smart contract enforces compliance (e.g., prevents direct sale; validates consumer’s ownership via farm share NFT).

3. **Shipment and Logging**:
   - Producer ships products to the consumer.
   - Blockchain records:
     - NFT ID as proof of entitlement.
     - Shipment details (e.g., weight, date, tracking).

4. **Regulator Oversight**:
   - Regulator accesses immutable records to verify that the transaction complies with farm share regulations.

**Assets Involved**:
- **Farm Share NFTs**: Encodes out-of-state ownership and entitlements.
- **Smart Contracts**: Enforces geographic and legal restrictions.
- **Delivery Logs**: Immutable proof of shipment and compliance.

---

#### **3. Multi-State Marketplace Expansion**
**Objective**: Enable producers to expand their market reach while dynamically complying with regional laws.

**Actors**:
- **Producer**: Manages multiple farm share offerings.
- **Consumer**: Purchases shares from producers in different states.
- **Regulator**: Monitors multi-state compliance.

**Steps**:
1. **Dynamic Compliance Checks**:
   - Smart contracts evaluate consumer location, product type, and regional restrictions before purchase.

2. **Regional Farm Share NFTs**:
   - NFTs are region-specific and dynamically adjust attributes:
     - Allowed product quantity (e.g., "Raw Milk - 2 gallons/month").
     - Validity in specific states (e.g., "Valid in MI, OH, IN").
   - Producers mint NFTs tailored to each state’s laws.

3. **Audit Trail**:
   - Blockchain provides a transparent record of cross-state transactions.
   - Regulators can access data filtered by their jurisdiction.

**Assets Involved**:
- **Regional NFTs**: Reflect state-specific rules.
- **Compliance Reports**: On-chain summaries for multi-state regulators.

---

### **Assets-Based Design**

#### **1. NFTs**
**Purpose**: Serve as dynamic, tamper-proof records of ownership, entitlement, and compliance.

**Types**:
- **Farm Share NFTs**:
  - Metadata includes ownership percentage, product entitlements, and compliance status.
- **Product NFTs**:
  - Represent specific goods tied to farm shares (e.g., "1 gallon of raw milk").

#### **2. Smart Contracts**
**Purpose**: Automate compliance, transactions, and renewals.

**Key Functions**:
- Verify consumer geolocation and entitlement.
- Automate delivery schedules and logging.
- Trigger renewal or transfer options.

#### **3. Blockchain Ledger**
**Purpose**: Provide immutable proof of transactions and compliance.

**Key Data Points**:
- Farm share creation and ownership logs.
- Delivery and fulfillment records.
- Compliance audit trails.

#### **4. Geolocation APIs**
**Purpose**: Ensure sales comply with geographic restrictions.

**Integration**:
- Real-time validation of buyer proximity to producers.
- Restrict access to listings based on location.

#### **5. Delivery Confirmation Tools**
**Purpose**: Verify product receipt and complete transactions.

**Tools**:
- QR codes for in-person delivery validation.
- Digital signatures for remote shipment confirmations.

#### **6. User Dashboards**
**Purpose**: Provide producers and consumers with clear, actionable insights.

**Features**:
- Producers:
  - Manage farm share listings, NFT minting, and delivery logs.
- Consumers:
  - View farm share ownership, product entitlements, and compliance status.

#### **7. Compliance Monitoring Tools**
**Purpose**: Facilitate regulator oversight.

**Features**:
- Read-only access to blockchain logs.
- Filters by jurisdiction and product type.

---

### **Summary Workflow Diagram**

**Step 1**: Producer Lists Farm Shares  
**Step 2**: Consumer Purchases via Blockchain  
   - NFT Minted → Ownership Confirmed  
**Step 3**: Compliance Check via Smart Contracts  
   - Location Verified → Legal Sale Ensured  
**Step 4**: Delivery and Logging  
   - Shipment or Pickup Confirmed → Blockchain Record Updated  
**Step 5**: Renewal or Transfer  
   - Smart Contract Automates Future Actions  
