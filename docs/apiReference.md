# Field 2 Table (f2t.io) API Reference

## Table of Contents
- [Authentication](#authentication)
- [NFT Endpoints](#nft-endpoints)
- [Farm Share Endpoints](#farm-share-endpoints)
- [Marketplace Endpoints](#marketplace-endpoints)
- [User Management](#user-management)
- [Compliance](#compliance)
- [Error Handling](#error-handling)
- [Rate Limits](#rate-limits)
- [Versioning](#versioning)

## Authentication

All API requests require an NFT-based authentication token in the Authorization header.

```http
Authorization: Bearer <nft_token>
```

### Token Validation Response
```json
{
    "status": "valid",
    "attributes": {
        "role": "producer",
        "permissions": ["create_listing", "view_orders"],
        "region": "us-michigan",
        "farmShareVerified": true,
        "interstateCommerce": true
    },
    "exp": "2024-12-31T23:59:59Z"
}
```

## NFT Endpoints

### Mint Access NFT

```http
POST /v1/nft/mint
```

Mints a new access control NFT for a user.

#### Request Body
```json
{
    "userId": "user123",
    "role": "producer",
    "attributes": {
        "compliance": {
            "status": "verified",
            "jurisdiction": ["MI"],
            "farmShareVerified": true
        },
        "geolocation": {
            "primaryRegion": "us-michigan",
            "salesType": "direct-to-consumer",
            "farmShareEnabled": true,
            "allowedRegions": ["us-michigan", "us-ohio"]
        }
    }
}
```

#### Response
```json
{
    "tokenId": "nft_xyz789",
    "contractAddress": "0x123...",
    "attributes": {
        "role": "producer",
        "compliance": {
            "status": "verified",
            "lastVerified": "2024-11-29T12:00:00Z",
            "farmShareVerified": true
        }
    },
    "metadata": {
        "version": "1.0",
        "createdAt": "2024-11-29T12:00:00Z"
    }
}
```

### Update NFT Attributes

```http
PATCH /v1/nft/{tokenId}/attributes
```

Updates specific attributes of an existing NFT.

#### Request Body
```json
{
    "attributes": {
        "compliance": {
            "status": "suspended",
            "farmShareVerified": false
        }
    }
}
```

#### Response
```json
{
    "tokenId": "nft_xyz789",
    "updated": {
        "compliance": {
            "status": "suspended",
            "lastUpdated": "2024-11-29T12:30:00Z",
            "farmShareVerified": false
        }
    }
}
```

## Farm Share Endpoints

### Create Farm Share

```http
POST /v1/farmshares
```

Creates a new farm share offering.

#### Request Body
```json
{
    "name": "Spring 2025 Dairy Share",
    "description": "Quarter share of dairy production",
    "totalShares": 100,
    "pricePerShare": "500.00",
    "duration": {
        "start": "2025-03-01T00:00:00Z",
        "end": "2025-05-31T23:59:59Z"
    },
    "products": [
        {
            "type": "raw_milk",
            "quantityPerShare": "1 gallon",
            "frequency": "weekly"
        }
    ],
    "compliance": {
        "interstateEnabled": true,
        "allowedRegions": ["us-michigan", "us-ohio"],
        "requirements": {
            "licenses": ["dairy_production", "grade_a_milk"],
            "verifications": ["farm_share_verified"]
        }
    }
}
```

#### Response
```json
{
    "shareId": "share_abc123",
    "contractAddress": "0x456...",
    "status": "active",
    "availableShares": 100,
    "details": {
        "name": "Spring 2025 Dairy Share",
        "price": "500.00",
        "duration": {
            "start": "2025-03-01T00:00:00Z",
            "end": "2025-05-31T23:59:59Z"
        }
    },
    "compliance": {
        "interstateVerified": true,
        "allowedRegions": ["us-michigan", "us-ohio"]
    }
}
```

### Purchase Farm Share

```http
POST /v1/farmshares/{shareId}/purchase
```

Purchases a farm share and mints the corresponding NFT.

#### Request Body
```json
{
    "quantity": 1,
    "paymentMethod": "crypto",
    "walletAddress": "0x789...",
    "location": {
        "region": "us-ohio",
        "type": "interstate"
    }
}
```

#### Response
```json
{
    "purchaseId": "purchase_def456",
    "shareNFT": {
        "tokenId": "nft_789xyz",
        "contractAddress": "0x789...",
        "share": {
            "id": "share_abc123",
            "quantity": 1,
            "type": "interstate_verified"
        }
    },
    "receipt": {
        "amount": "500.00",
        "timestamp": "2024-11-29T12:00:00Z",
        "transactionHash": "0xabc..."
    },
    "compliance": {
        "interstateVerified": true,
        "farmShareEnabled": true,
        "allowedRegions": ["us-michigan", "us-ohio"],
        "verificationId": "verify_xyz789"
    }
}
```

## Marketplace Endpoints

### Create Listing

```http
POST /v1/listings
```

Creates a new product listing.

#### Request Body
```json
{
    "title": "Fresh Raw Milk",
    "description": "Farm-fresh raw milk from grass-fed cows",
    "price": "8.00",
    "unit": "gallon",
    "availability": {
        "quantity": 50,
        "frequency": "weekly"
    },
    "requirements": {
        "farmShareRequired": true,
        "shareTypes": ["dairy_share"],
        "compliance": {
            "licenses": ["dairy_production"],
            "interstate": true,
            "regions": ["us-michigan", "us-ohio"]
        }
    }
}
```

#### Response
```json
{
    "listingId": "listing_ghi789",
    "status": "active",
    "visibility": {
        "type": "interstate_farm_share",
        "regions": ["us-michigan", "us-ohio"]
    },
    "details": {
        "title": "Fresh Raw Milk",
        "price": "8.00",
        "availability": {
            "remaining": 50
        }
    }
}
```

### Search Listings

```http
GET /v1/listings/search
```

Searches for available listings based on location and criteria.

#### Query Parameters
```
region: us-michigan
salesType: direct|farmshare
verificationLevel: standard|interstate
shareType: dairy_share
productType: raw_milk
```

#### Response
```json
{
    "results": [
        {
            "listingId": "listing_ghi789",
            "producer": {
                "id": "producer_123",
                "name": "Green Pastures Farm",
                "salesTypes": ["direct", "farmshare"],
                "compliance": {
                    "cottageFood": true,
                    "farmShareVerified": true,
                    "allowedRegions": ["us-michigan", "us-ohio"]
                }
            },
            "details": {
                "title": "Fresh Raw Milk",
                "price": "8.00",
                "availability": {
                    "remaining": 50
                }
            },
            "access": {
                "directSale": true,
                "farmShareAvailable": true,
                "interstateAllowed": true,
                "requiresFarmShare": true
            }
        }
    ],
    "pagination": {
        "total": 1,
        "page": 1,
        "perPage": 20
    }
}
```

## User Management

### Register Producer

```http
POST /v1/producers
```

Registers a new producer account.

#### Request Body
```json
{
    "name": "Green Pastures Farm",
    "contact": {
        "email": "farmer@greenpastures.com",
        "phone": "+1-555-0123"
    },
    "location": {
        "address": "123 Farm Road",
        "city": "Ann Arbor",
        "state": "MI",
        "zip": "48103",
        "coordinates": {
            "lat": 42.2808,
            "lng": -83.7430
        }
    },
    "compliance": {
        "cottageFood": true,
        "farmShareEnabled": true,
        "licenses": ["dairy_production_license"],
        "interstateCommerce": true
    }
}
```

#### Response
```json
{
    "producerId": "producer_123",
    "status": "pending_verification",
    "nft": {
        "tokenId": "nft_xyz789",
        "attributes": {
            "role": "producer",
            "compliance": {
                "status": "pending",
                "farmShareVerified": false
            }
        }
    }
}
```

## Compliance

### Submit Compliance Verification

```http
POST /v1/compliance/verify
```

Submits compliance documentation for verification.

#### Request Body
```json
{
    "documentType": "cottage_food_license",
    "documentNumber": "CFP123456",
    "issuingState": "MI",
    "validUntil": "2025-12-31",
    "interstateCommerce": {
        "enabled": true,
        "regions": ["us-michigan", "us-ohio"],
        "farmShareStructure": {
            "type": "ownership_stake",
            "documentation": ["corporate_structure", "ownership_agreement"]
        }
    },
    "documents": [
        {
            "type": "license_scan",
            "url": "https://..."
        }
    ]
}
```

#### Response
```json
{
    "verificationId": "verify_jkl012",
    "status": "pending_review",
    "estimatedReviewTime": "48h",
    "submittedAt": "2024-11-29T12:00:00Z",
    "verificationTypes": [
        "cottage_food",
        "interstate_commerce",
        "farm_share"
    ]
}
```

## Error Handling

All error responses follow this format:

```json
{
    "error": {
        "code": "ERROR_CODE",
        "message": "Human-readable error message",
        "details": {
            "field": "Specific field causing error",
            "reason": "Detailed explanation"
        }
    },
    "requestId": "req_mno345"
}
```

### Common Error Codes
- `INVALID_TOKEN`: NFT token is invalid or expired
- `INSUFFICIENT_PERMISSIONS`: User lacks required permissions
- `COMPLIANCE_REQUIRED`: Action requires compliance verification
- `INVALID_REGION`: User outside allowed regions
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `SHARE_REQUIRED`: Farm share ownership required
- `INTERSTATE_NOT_ALLOWED`: Interstate commerce not verified
- `VALIDATION_ERROR`: Invalid input data

## Rate Limits

API endpoints are rate-limited based on the following tiers:

| Tier | Requests/Min | Burst | Response Header |
|------|-------------|-------|-----------------|
| Basic | 60 | 100 | X-RateLimit-Basic |
| Producer | 120 | 200 | X-RateLimit-Producer |
| Admin | 300 | 500 | X-RateLimit-Admin |

Rate limit headers included in responses:
```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1543597200
```

## Versioning

- Current API version: v1
- API versioning is handled through the URL path
- Older versions are supported for 12 months after deprecation notice
- Version sunset dates are announced 6 months in advance