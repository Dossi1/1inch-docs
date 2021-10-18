# ArgumentsDecoder





## Functions
### decodeUint256
```solidity
function decodeUint256(
  bytes data
) internal returns (uint256 value)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`data` | bytes | 


### decodeBool
```solidity
function decodeBool(
  bytes data
) internal returns (bool value)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`data` | bytes | 


### decodeTargetAndCalldata
```solidity
function decodeTargetAndCalldata(
  bytes data
) internal returns (address target, bytes args)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`data` | bytes | 


### decodeTargetAndData
```solidity
function decodeTargetAndData(
  bytes data
) internal returns (address target, bytes args)
```


#### Parameters:
| Name | Type | Description                                                          |
| :--- | :--- | :------------------------------------------------------------------- |
|`data` | bytes | 

