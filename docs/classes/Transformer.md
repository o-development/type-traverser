[type-traverser](../README.md) / [Exports](../modules.md) / Transformer

# Class: Transformer<Types, InputReturnTypes, Context\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](../modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](../modules.md#transformerinputreturntypes)<`Types`\> |
| `Context` | `undefined` |

## Table of contents

### Constructors

- [constructor](Transformer.md#constructor)

### Properties

- [transformers](Transformer.md#transformers)
- [traverserDefinition](Transformer.md#traverserdefinition)

### Methods

- [applyDefaultInterfaceTransformer](Transformer.md#applydefaultinterfacetransformer)
- [applyDefaultInterfaceTransformerProperties](Transformer.md#applydefaultinterfacetransformerproperties)
- [applyDefaultPrimitiveTransformer](Transformer.md#applydefaultprimitivetransformer)
- [applyDefaultTransformers](Transformer.md#applydefaulttransformers)
- [applyDefaultUnionTransformer](Transformer.md#applydefaultuniontransformer)
- [transform](Transformer.md#transform)

## Constructors

### constructor

• **new Transformer**<`Types`, `InputReturnTypes`, `Context`\>(`traverserDefinition`, `transformers`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](../modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends `Partial`<{ [TypeName in string \| number \| symbol]: BaseInputReturnType<Types, TypeName\> }\> |
| `Context` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `traverserDefinition` | [`TraverserDefinition`](../modules.md#traverserdefinition)<`Types`\> |
| `transformers` | `Partial`<{ [TypeName in string \| number \| symbol]: undefined extends InputReturnTypes[TypeName] ? TransformerInputDefinition<Types, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, TypeName, Context\> \| InputReturnTypes[TypeName] & undefined : TransformerInputDefinition<Types, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, TypeName, Context\> }\> |

#### Defined in

[Transformer.ts:48](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L48)

## Properties

### transformers

• `Private` **transformers**: `Transformers`<`Types`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `Context`\>

#### Defined in

[Transformer.ts:42](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L42)

___

### traverserDefinition

• `Private` **traverserDefinition**: [`TraverserDefinition`](../modules.md#traverserdefinition)<`Types`\>

#### Defined in

[Transformer.ts:41](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L41)

## Methods

### applyDefaultInterfaceTransformer

▸ `Private` **applyDefaultInterfaceTransformer**<`Type`, `ReturnType`\>(`typeName`, `typeInput?`): `InterfaceTransformerDefinition`<`Types`, `Type`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `ReturnType`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](../interfaces/InterfaceType.md)<keyof `Types`, `Type`\> |
| `ReturnType` | extends [`InterfaceReturnType`](../modules.md#interfacereturntype)<`Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | keyof `Types` |
| `typeInput?` | `InterfaceTransformerInputDefinition`<`Types`, `Type`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `ReturnType`, `Context`\> |

#### Returns

`InterfaceTransformerDefinition`<`Types`, `Type`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `ReturnType`, `Context`\>

#### Defined in

[Transformer.ts:99](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L99)

___

### applyDefaultInterfaceTransformerProperties

▸ `Private` **applyDefaultInterfaceTransformerProperties**<`Type`, `ReturnType`\>(`typeName`, `typePropertiesInput`): { [PropertyName in string \| number \| symbol]: InterfaceTransformerPropertyFunction<Types, Type, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, ReturnType, PropertyName, Context\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](../interfaces/InterfaceType.md)<keyof `Types`, `Type`\> |
| `ReturnType` | extends [`InterfaceReturnType`](../modules.md#interfacereturntype)<`Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeName` | keyof `Types` |
| `typePropertiesInput` | `undefined` \| `Partial`<{ [PropertyName in string \| number \| symbol]: InterfaceTransformerPropertyFunction<Types, Type, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, ReturnType, PropertyName, Context\> }\> |

#### Returns

{ [PropertyName in string \| number \| symbol]: InterfaceTransformerPropertyFunction<Types, Type, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, ReturnType, PropertyName, Context\> }

#### Defined in

[Transformer.ts:56](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L56)

___

### applyDefaultPrimitiveTransformer

▸ `Private` **applyDefaultPrimitiveTransformer**<`Type`, `ReturnType`\>(`typeInput?`): `PrimitiveTransformerDefinition`<`Type`, `ReturnType`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`PrimitiveType`](../interfaces/PrimitiveType.md) |
| `ReturnType` | extends [`PrimitiveReturnType`](../modules.md#primitivereturntype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeInput?` | `PrimitiveTransformerInputDefinition`<`Type`, `ReturnType`, `Context`\> |

#### Returns

`PrimitiveTransformerDefinition`<`Type`, `ReturnType`, `Context`\>

#### Defined in

[Transformer.ts:170](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L170)

___

### applyDefaultTransformers

▸ `Private` **applyDefaultTransformers**(`inputTransformers`): `Transformers`<`Types`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `Context`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputTransformers` | `Partial`<{ [TypeName in string \| number \| symbol]: undefined extends InputReturnTypes[TypeName] ? TransformerInputDefinition<Types, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, TypeName, Context\> \| InputReturnTypes[TypeName] & undefined : TransformerInputDefinition<Types, ApplyTransformerReturnTypesDefaults<Types, InputReturnTypes\>, TypeName, Context\> }\> |

#### Returns

`Transformers`<`Types`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `Context`\>

#### Defined in

[Transformer.ts:184](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L184)

___

### applyDefaultUnionTransformer

▸ `Private` **applyDefaultUnionTransformer**<`Type`, `ReturnType`\>(`typeInput?`): `UnionTransformerDefinition`<`Types`, `Type`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `ReturnType`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`UnionType`](../interfaces/UnionType.md)<keyof `Types`, `Type`\> |
| `ReturnType` | extends [`UnionReturnType`](../modules.md#unionreturntype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeInput?` | `UnionTransformerInputDefinition`<`Types`, `Type`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `ReturnType`, `Context`\> |

#### Returns

`UnionTransformerDefinition`<`Types`, `Type`, [`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>, `ReturnType`, `Context`\>

#### Defined in

[Transformer.ts:141](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L141)

___

### transform

▸ **transform**<`TypeName`\>(`item`, `itemTypeName`, `context`): `Promise`<[`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>[`TypeName`][``"return"``]\>

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

`Promise`<[`ApplyTransformerReturnTypesDefaults`](../modules.md#applytransformerreturntypesdefaults)<`Types`, `InputReturnTypes`\>[`TypeName`][``"return"``]\>

#### Defined in

[Transformer.ts:221](https://github.com/o-development/type-traverser/blob/db4e358/lib/Transformer.ts#L221)
