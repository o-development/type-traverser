[type-traverser](../README.md) / [Exports](../modules.md) / Visitor

# Class: Visitor<Types, Context\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](../modules.md#traversertypes)<`any`\> |
| `Context` | `undefined` |

## Table of contents

### Constructors

- [constructor](Visitor.md#constructor)

### Properties

- [traverserDefinition](Visitor.md#traverserdefinition)
- [visitors](Visitor.md#visitors)

### Methods

- [applyDefaultInterfaceVisitor](Visitor.md#applydefaultinterfacevisitor)
- [applyDefaultInterfaceVisitorProperties](Visitor.md#applydefaultinterfacevisitorproperties)
- [applyDefaultPrimitiveVisitor](Visitor.md#applydefaultprimitivevisitor)
- [applyDefaultUnionVisitor](Visitor.md#applydefaultunionvisitor)
- [applyDefaultVisitors](Visitor.md#applydefaultvisitors)
- [visit](Visitor.md#visit)

## Constructors

### constructor

• **new Visitor**<`Types`, `Context`\>(`traverserDefinition`, `visitors`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](../modules.md#traversertypes)<`any`\> |
| `Context` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `traverserDefinition` | [`TraverserDefinition`](../modules.md#traverserdefinition)<`Types`\> |
| `visitors` | `Partial`<{ [TypeName in string \| number \| symbol]: VisitorInputDefinition<Types, TypeName, Context\> }\> |

#### Defined in

[Visitor.ts:33](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L33)

## Properties

### traverserDefinition

• `Private` **traverserDefinition**: [`TraverserDefinition`](../modules.md#traverserdefinition)<`Types`\>

#### Defined in

[Visitor.ts:30](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L30)

___

### visitors

• `Private` **visitors**: [`Visitors`](../modules.md#visitors)<`Types`, `Context`\>

#### Defined in

[Visitor.ts:31](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L31)

## Methods

### applyDefaultInterfaceVisitor

▸ `Private` **applyDefaultInterfaceVisitor**<`Type`\>(`typeName`, `typeInput?`): [`InterfaceVisitorDefinition`](../modules.md#interfacevisitordefinition)<`Types`, `Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](../interfaces/InterfaceType.md)<keyof `Types`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | keyof `Types` |
| `typeInput?` | [`InterfaceVisitorInputDefinition`](../modules.md#interfacevisitorinputdefinition)<`Types`, `Type`, `Context`\> |

#### Returns

[`InterfaceVisitorDefinition`](../modules.md#interfacevisitordefinition)<`Types`, `Type`, `Context`\>

#### Defined in

[Visitor.ts:66](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L66)

___

### applyDefaultInterfaceVisitorProperties

▸ `Private` **applyDefaultInterfaceVisitorProperties**<`Type`\>(`typeName`, `typePropertiesInput`): { [PropertyName in string \| number \| symbol]: InterfaceVisitorPropertyFunction<Types, Type, PropertyName, Context\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](../interfaces/InterfaceType.md)<keyof `Types`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | keyof `Types` |
| `typePropertiesInput` | `undefined` \| `Partial`<{ [PropertyName in string \| number \| symbol]: InterfaceVisitorPropertyFunction<Types, Type, PropertyName, Context\> }\> |

#### Returns

{ [PropertyName in string \| number \| symbol]: InterfaceVisitorPropertyFunction<Types, Type, PropertyName, Context\> }

#### Defined in

[Visitor.ts:41](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L41)

___

### applyDefaultPrimitiveVisitor

▸ `Private` **applyDefaultPrimitiveVisitor**<`Type`\>(`typeInput?`): [`PrimitiveVisitorDefinition`](../modules.md#primitivevisitordefinition)<`Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`PrimitiveType`](../interfaces/PrimitiveType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeInput?` | [`PrimitiveVisitorInputDefinition`](../modules.md#primitivevisitorinputdefinition)<`Type`, `Context`\> |

#### Returns

[`PrimitiveVisitorDefinition`](../modules.md#primitivevisitordefinition)<`Type`, `Context`\>

#### Defined in

[Visitor.ts:98](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L98)

___

### applyDefaultUnionVisitor

▸ `Private` **applyDefaultUnionVisitor**<`Type`\>(`typeInput?`): [`UnionVisitorDefinition`](../modules.md#unionvisitordefinition)<`Types`, `Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`UnionType`](../interfaces/UnionType.md)<keyof `Types`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeInput?` | [`UnionVisitorInputDefinition`](../modules.md#unionvisitorinputdefinition)<`Types`, `Type`, `Context`\> |

#### Returns

[`UnionVisitorDefinition`](../modules.md#unionvisitordefinition)<`Types`, `Type`, `Context`\>

#### Defined in

[Visitor.ts:87](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L87)

___

### applyDefaultVisitors

▸ `Private` **applyDefaultVisitors**(`inputVisitors`): [`Visitors`](../modules.md#visitors)<`Types`, `Context`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputVisitors` | `Partial`<{ [TypeName in string \| number \| symbol]: VisitorInputDefinition<Types, TypeName, Context\> }\> |

#### Returns

[`Visitors`](../modules.md#visitors)<`Types`, `Context`\>

#### Defined in

[Visitor.ts:109](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L109)

___

### visit

▸ **visit**<`TypeName`\>(`item`, `itemTypeName`, `context`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeName` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `Types`[`TypeName`][``"type"``] |
| `itemTypeName` | `TypeName` |
| `context` | `Context` |

#### Returns

`Promise`<`void`\>

#### Defined in

[Visitor.ts:132](https://github.com/o-development/type-traverser/blob/c9fa11c/lib/Visitor.ts#L132)
