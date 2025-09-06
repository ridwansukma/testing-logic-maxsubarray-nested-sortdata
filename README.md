# Testing Algorithms

## 🚀 Getting Started

1. Clone Repository

    ```bash
    git clone https://github.com/ridwansukma/testing-logic-maxsubarray-nested-sortdata.git
    cd test-algorithms
    ```
2. Install Dependencies
    ```bash
    npm install
    ```
    
3. Run Test
npm test

## 📂 Project Structure

```
.
├── src/
│   ├── SortDataDesc.js         # fungsi sorting manual
│   ├── MaxNumberSubArray.js    # fungsi maximum subarray sum
│   └── NestedSum.js            # fungsi nested even sum
├── tests/
│   ├── SortDataDesc.test.js
│   ├── MaxNumberSubArray.test.js
│   └── NestedSum.test.js
├── package.json
└── README.md
```

## ✅ Example Test Results
1. Sorting Data Descending
    - `Input: [1, 2, 4, 3, 5, 3, 2, 1]`
    - `Output: [5, 4, 3, 3, 2, 2, 1, 1]`

2. Maximum Sub Array Summary
    a. Test 1 :
    
    ```bash
    - Input: ([100, 200, 300, 400], 2)
    - Output: 700
    ```

    b. Test 2 :
    
    ```bash
    - Input: ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)
    - Output: 39
    ```

    b. Test 3 :
    
    ```bash
    - Input: ([-3, 4, 0, -2, 6, -1], 2)
    - Output: 5
    ```

3. Nested Even Sum
    - Input:
        ```bash
        {
            a: 2,
            b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
            c: { c: { c: 2 }, cc: "ball", ccc: 5 },
            d: 1,
            e: { e: { e: 4 }, ee: "car" }
        }
        ```
    - Output: `12`