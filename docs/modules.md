[type-traverser](README.md) / Exports

# type-traverser

## Table of contents

### Classes

- [Transformer](classes/Transformer.md)
- [Traverser](classes/Traverser.md)
- [Visitor](classes/Visitor.md)

### Interfaces

- [InterfaceType](interfaces/InterfaceType.md)
- [PrimitiveType](interfaces/PrimitiveType.md)
- [UnionType](interfaces/UnionType.md)

### Type aliases

- [ApplyArrayAndUndefined](modules.md#applyarrayandundefined)
- [ApplyTransformerInterfacePropertiesReturnTypeDefault](modules.md#applytransformerinterfacepropertiesreturntypedefault)
- [ApplyTransformerInterfaceReturnTypeDefault](modules.md#applytransformerinterfacereturntypedefault)
- [ApplyTransformerPrimitiveReturnTypeDefault](modules.md#applytransformerprimitivereturntypedefault)
- [ApplyTransformerReturnTypeDefault](modules.md#applytransformerreturntypedefault)
- [ApplyTransformerReturnTypesDefaults](modules.md#applytransformerreturntypesdefaults)
- [ApplyTransformerUnionReturnTypeDefault](modules.md#applytransformerunionreturntypedefault)
- [ApplyUndefined](modules.md#applyundefined)
- [AssertExtends](modules.md#assertextends)
- [BaseInputReturnType](modules.md#baseinputreturntype)
- [BaseReturnType](modules.md#basereturntype)
- [BaseTraverserTypes](modules.md#basetraversertypes)
- [HackilyApplyConditionalPropertiesDefaults](modules.md#hackilyapplyconditionalpropertiesdefaults)
- [HackilyApplyConditionalPropertyDefaults](modules.md#hackilyapplyconditionalpropertydefaults)
- [InterfaceInputReturnType](modules.md#interfaceinputreturntype)
- [InterfacePropertiesInputReturnType](modules.md#interfacepropertiesinputreturntype)
- [InterfaceReturnType](modules.md#interfacereturntype)
- [InterfaceTraverserDefinition](modules.md#interfacetraverserdefinition)
- [InterfaceVisitorDefinition](modules.md#interfacevisitordefinition)
- [InterfaceVisitorFunction](modules.md#interfacevisitorfunction)
- [InterfaceVisitorInputDefinition](modules.md#interfacevisitorinputdefinition)
- [InterfaceVisitorPropertyFunction](modules.md#interfacevisitorpropertyfunction)
- [KeyTypes](modules.md#keytypes)
- [PrimitiveInputReturnType](modules.md#primitiveinputreturntype)
- [PrimitiveReturnType](modules.md#primitivereturntype)
- [PrimitiveTraverserDefinition](modules.md#primitivetraverserdefinition)
- [PrimitiveVisitorDefinition](modules.md#primitivevisitordefinition)
- [PrimitiveVisitorFunction](modules.md#primitivevisitorfunction)
- [PrimitiveVisitorInputDefinition](modules.md#primitivevisitorinputdefinition)
- [RecursivelyFindReturnType](modules.md#recursivelyfindreturntype)
- [TransformerInputReturnTypes](modules.md#transformerinputreturntypes)
- [TransformerReturnTypes](modules.md#transformerreturntypes)
- [TraverserDefinition](modules.md#traverserdefinition)
- [TraverserTypes](modules.md#traversertypes)
- [UnionInputReturnType](modules.md#unioninputreturntype)
- [UnionReturnType](modules.md#unionreturntype)
- [UnionTraverserDefinition](modules.md#uniontraverserdefinition)
- [UnionVisitorDefinition](modules.md#unionvisitordefinition)
- [UnionVisitorFunction](modules.md#unionvisitorfunction)
- [UnionVisitorInputDefinition](modules.md#unionvisitorinputdefinition)
- [ValidateTraverserTypes](modules.md#validatetraversertypes)
- [VisitorDefinition](modules.md#visitordefinition)
- [VisitorInputDefinition](modules.md#visitorinputdefinition)
- [Visitors](modules.md#visitors)
- [VisitorsInput](modules.md#visitorsinput)

## Type aliases

### ApplyArrayAndUndefined

Ƭ **ApplyArrayAndUndefined**<`OriginalType`, `ReturnType`\>: [`ApplyUndefined`](modules.md#applyundefined)<`OriginalType`, `NonNullable`<`OriginalType`\> extends `any`[] ? `ReturnType`[] : `ReturnType`\>

#### Type parameters

| Name |
| :------ |
| `OriginalType` |
| `ReturnType` |

#### Defined in

[TransformerReturnTypesDefaults.ts:37](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L37)

___

### ApplyTransformerInterfacePropertiesReturnTypeDefault

Ƭ **ApplyTransformerInterfacePropertiesReturnTypeDefault**<`Types`, `InputReturnTypes`, `TypeName`, `VisitedTypeNames`\>: `Types`[`TypeName`] extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> ? { [PropertyName in keyof Types[TypeName]["properties"]]: InputReturnTypes[TypeName] extends InterfaceInputReturnType<Types[TypeName]\> ? HackilyApplyConditionalPropertiesDefaults<Types, InputReturnTypes, VisitedTypeNames, Types[TypeName], InputReturnTypes[TypeName], PropertyName, Types[TypeName]["properties"][PropertyName]\> : ApplyArrayAndUndefined<Types[TypeName]["type"][PropertyName], RecursivelyFindReturnType<Types, InputReturnTypes, Types[TypeName]["properties"][PropertyName], VisitedTypeNames\>\> } : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `TypeName` | extends keyof `Types` |
| `VisitedTypeNames` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypesDefaults.ts:93](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L93)

___

### ApplyTransformerInterfaceReturnTypeDefault

Ƭ **ApplyTransformerInterfaceReturnTypeDefault**<`Types`, `InputReturnTypes`, `TypeName`, `Type`, `VisitedTypeNames`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `TypeName` | extends keyof `Types` |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `VisitedTypeNames` | extends keyof `Types` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | [`ApplyTransformerInterfacePropertiesReturnTypeDefault`](modules.md#applytransformerinterfacepropertiesreturntypedefault)<`Types`, `InputReturnTypes`, `TypeName`, `VisitedTypeNames`\> |
| `return` | `InputReturnTypes`[`TypeName`] extends [`InterfaceInputReturnType`](modules.md#interfaceinputreturntype)<`Type`\> ? `InputReturnTypes`[`TypeName`][``"return"``] : [`ApplyTransformerInterfacePropertiesReturnTypeDefault`](modules.md#applytransformerinterfacepropertiesreturntypedefault)<`Types`, `InputReturnTypes`, `TypeName`, `VisitedTypeNames`\> |

#### Defined in

[TransformerReturnTypesDefaults.ts:124](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L124)

___

### ApplyTransformerPrimitiveReturnTypeDefault

Ƭ **ApplyTransformerPrimitiveReturnTypeDefault**<`Types`, `InputReturnTypes`, `TypeName`, `Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `TypeName` | extends keyof `Types` |
| `Type` | extends [`PrimitiveType`](interfaces/PrimitiveType.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `return` | `InputReturnTypes`[`TypeName`] extends [`PrimitiveReturnType`](modules.md#primitivereturntype) ? `InputReturnTypes`[`TypeName`][``"return"``] : `Type`[``"type"``] |

#### Defined in

[TransformerReturnTypesDefaults.ts:164](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L164)

___

### ApplyTransformerReturnTypeDefault

Ƭ **ApplyTransformerReturnTypeDefault**<`Types`, `InputReturnTypes`, `TypeName`, `VisitedTypeNames`\>: `Types`[`TypeName`] extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> ? [`ApplyTransformerInterfaceReturnTypeDefault`](modules.md#applytransformerinterfacereturntypedefault)<`Types`, `InputReturnTypes`, `TypeName`, `Types`[`TypeName`], `VisitedTypeNames`\> : `Types`[`TypeName`] extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> ? [`ApplyTransformerUnionReturnTypeDefault`](modules.md#applytransformerunionreturntypedefault)<`Types`, `InputReturnTypes`, `TypeName`, `Types`[`TypeName`], `VisitedTypeNames`\> : `Types`[`TypeName`] extends [`PrimitiveType`](interfaces/PrimitiveType.md) ? [`ApplyTransformerPrimitiveReturnTypeDefault`](modules.md#applytransformerprimitivereturntypedefault)<`Types`, `InputReturnTypes`, `TypeName`, `Types`[`TypeName`]\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `TypeName` | extends keyof `Types` |
| `VisitedTypeNames` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypesDefaults.ts:175](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L175)

___

### ApplyTransformerReturnTypesDefaults

Ƭ **ApplyTransformerReturnTypesDefaults**<`Types`, `InputReturnTypes`\>: { [TypeName in keyof Types]: ApplyTransformerReturnTypeDefault<Types, InputReturnTypes, TypeName, never\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |

#### Defined in

[TransformerReturnTypesDefaults.ts:205](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L205)

___

### ApplyTransformerUnionReturnTypeDefault

Ƭ **ApplyTransformerUnionReturnTypeDefault**<`Types`, `InputReturnTypes`, `TypeName`, `Type`, `VisitedTypeNames`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `TypeName` | extends keyof `Types` |
| `Type` | extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> |
| `VisitedTypeNames` | extends keyof `Types` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `return` | `InputReturnTypes`[`TypeName`] extends [`UnionInputReturnType`](modules.md#unioninputreturntype) ? `InputReturnTypes`[`TypeName`][``"return"``] : [`RecursivelyFindReturnType`](modules.md#recursivelyfindreturntype)<`Types`, `InputReturnTypes`, `Type`[``"typeNames"``], `VisitedTypeNames`\> |

#### Defined in

[TransformerReturnTypesDefaults.ts:147](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L147)

___

### ApplyUndefined

Ƭ **ApplyUndefined**<`OriginalType`, `ReturnType`\>: `undefined` extends `OriginalType` ? `ReturnType` \| `undefined` : `ReturnType`

#### Type parameters

| Name |
| :------ |
| `OriginalType` |
| `ReturnType` |

#### Defined in

[TransformerReturnTypesDefaults.ts:34](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L34)

___

### AssertExtends

Ƭ **AssertExtends**<`Extended`, `Extends`\>: `Extends` extends `Extended` ? `Extends` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Extended` | `Extended` |
| `Extends` | extends `Extended` |

#### Defined in

[UtilTypes.ts:3](https://github.com/o-development/type-traverser/blob/db4e358/lib/UtilTypes.ts#L3)

___

### BaseInputReturnType

Ƭ **BaseInputReturnType**<`Types`, `TypeName`\>: `Types`[`TypeName`] extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> ? [`InterfaceInputReturnType`](modules.md#interfaceinputreturntype)<`Types`[`TypeName`]\> : `Types`[`TypeName`] extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> ? [`UnionInputReturnType`](modules.md#unioninputreturntype) : `Types`[`TypeName`] extends [`PrimitiveType`](interfaces/PrimitiveType.md) ? [`PrimitiveInputReturnType`](modules.md#primitiveinputreturntype) : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `TypeName` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypes.ts:56](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L56)

___

### BaseReturnType

Ƭ **BaseReturnType**<`Types`, `TypeName`\>: `Types`[`TypeName`] extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> ? [`InterfaceReturnType`](modules.md#interfacereturntype)<`Types`[`TypeName`]\> : `Types`[`TypeName`] extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> ? [`UnionReturnType`](modules.md#unionreturntype) : `Types`[`TypeName`] extends [`PrimitiveType`](interfaces/PrimitiveType.md) ? [`PrimitiveReturnType`](modules.md#primitivereturntype) : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `TypeName` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypes.ts:19](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L19)

___

### BaseTraverserTypes

Ƭ **BaseTraverserTypes**<`TypeNames`\>: [`InterfaceType`](interfaces/InterfaceType.md)<`TypeNames`\> \| [`UnionType`](interfaces/UnionType.md)<`TypeNames`\> \| [`PrimitiveType`](interfaces/PrimitiveType.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeNames` | extends [`KeyTypes`](modules.md#keytypes) |

#### Defined in

[TraverserTypes.ts:23](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserTypes.ts#L23)

___

### HackilyApplyConditionalPropertiesDefaults

Ƭ **HackilyApplyConditionalPropertiesDefaults**<`Types`, `InputReturnTypes`, `VisitedTypeNames`, `Type`, `InputReturnType`, `PropertyName`, `FallbackKey`\>: `InputReturnType`[``"properties"``] extends [`InterfacePropertiesInputReturnType`](modules.md#interfacepropertiesinputreturntype)<`Type`\> ? [`HackilyApplyConditionalPropertyDefaults`](modules.md#hackilyapplyconditionalpropertydefaults)<`Types`, `InputReturnTypes`, `VisitedTypeNames`, `Type`, `InputReturnType`[``"properties"``], `PropertyName`, `FallbackKey`\> : [`ApplyArrayAndUndefined`](modules.md#applyarrayandundefined)<`Type`[``"type"``][`PropertyName`], [`RecursivelyFindReturnType`](modules.md#recursivelyfindreturntype)<`Types`, `InputReturnTypes`, `FallbackKey`, `VisitedTypeNames`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `VisitedTypeNames` | extends keyof `Types` |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `InputReturnType` | extends [`InterfaceInputReturnType`](modules.md#interfaceinputreturntype)<`any`\> |
| `PropertyName` | extends keyof `Type`[``"type"``] |
| `FallbackKey` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypesDefaults.ts:65](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L65)

___

### HackilyApplyConditionalPropertyDefaults

Ƭ **HackilyApplyConditionalPropertyDefaults**<`Types`, `InputReturnTypes`, `VisitedTypeNames`, `Type`, `PropertiesInputRetunType`, `PropertyName`, `FallbackKey`\>: `unknown` extends `PropertiesInputRetunType`[`PropertyName`] ? [`ApplyArrayAndUndefined`](modules.md#applyarrayandundefined)<`Type`[``"type"``][`PropertyName`], [`RecursivelyFindReturnType`](modules.md#recursivelyfindreturntype)<`Types`, `InputReturnTypes`, `FallbackKey`, `VisitedTypeNames`\>\> : [`ApplyUndefined`](modules.md#applyundefined)<`Type`[``"type"``][`PropertyName`], `PropertiesInputRetunType`[`PropertyName`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `VisitedTypeNames` | extends keyof `Types` |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `PropertiesInputRetunType` | extends [`InterfacePropertiesInputReturnType`](modules.md#interfacepropertiesinputreturntype)<`Type`\> |
| `PropertyName` | extends keyof `Type`[``"type"``] |
| `FallbackKey` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypesDefaults.ts:42](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L42)

___

### InterfaceInputReturnType

Ƭ **InterfaceInputReturnType**<`Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<`any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties?` | [`InterfacePropertiesInputReturnType`](modules.md#interfacepropertiesinputreturntype)<`Type`\> |
| `return` | `any` |

#### Defined in

[TransformerReturnTypes.ts:43](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L43)

___

### InterfacePropertiesInputReturnType

Ƭ **InterfacePropertiesInputReturnType**<`Type`\>: `Partial`<{ [PropertyName in keyof Type["properties"]]: any }\>

Input

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<`any`\> |

#### Defined in

[TransformerReturnTypes.ts:37](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L37)

___

### InterfaceReturnType

Ƭ **InterfaceReturnType**<`Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<`any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | { [PropertyName in keyof Type["properties"]]: any } |
| `return` | `any` |

#### Defined in

[TransformerReturnTypes.ts:4](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L4)

___

### InterfaceTraverserDefinition

Ƭ **InterfaceTraverserDefinition**<`Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<`any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"interface"`` |
| `properties` | { [PropertyField in keyof Type["properties"]]: Type["properties"][PropertyField] } |

#### Defined in

[TraverserDefinition.ts:4](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserDefinition.ts#L4)

___

### InterfaceVisitorDefinition

Ƭ **InterfaceVisitorDefinition**<`Types`, `Type`, `Context`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `Context` | `Context` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties` | { [PropertyName in keyof Type["properties"]]: InterfaceVisitorPropertyFunction<Types, Type, PropertyName, Context\> } |
| `visitor` | [`InterfaceVisitorFunction`](modules.md#interfacevisitorfunction)<`Types`, `Type`, `Context`\> |

#### Defined in

[Visitors.ts:20](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L20)

___

### InterfaceVisitorFunction

Ƭ **InterfaceVisitorFunction**<`Types`, `Type`, `Context`\>: (`originalData`: `Type`[``"type"``], `context`: `Context`) => `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `Context` | `Context` |

#### Type declaration

▸ (`originalData`, `context`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `originalData` | `Type`[``"type"``] |
| `context` | `Context` |

##### Returns

`Promise`<`void`\>

#### Defined in

[Visitors.ts:4](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L4)

___

### InterfaceVisitorInputDefinition

Ƭ **InterfaceVisitorInputDefinition**<`Types`, `Type`, `Context`\>: `Object`

Input

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `Context` | `Context` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `properties?` | `Partial`<{ [PropertyName in keyof Type["properties"]]: InterfaceVisitorPropertyFunction<Types, Type, PropertyName, Context\> }\> |
| `visitor` | [`InterfaceVisitorFunction`](modules.md#interfacevisitorfunction)<`Types`, `Type`, `Context`\> |

#### Defined in

[Visitors.ts:77](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L77)

___

### InterfaceVisitorPropertyFunction

Ƭ **InterfaceVisitorPropertyFunction**<`Types`, `Type`, `PropertyName`, `Context`\>: (`originalData`: `Types`[`Type`[``"properties"``][`PropertyName`]][``"type"``], `context`: `Context`) => `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> |
| `PropertyName` | extends keyof `Type`[``"properties"``] |
| `Context` | `Context` |

#### Type declaration

▸ (`originalData`, `context`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `originalData` | `Types`[`Type`[``"properties"``][`PropertyName`]][``"type"``] |
| `context` | `Context` |

##### Returns

`Promise`<`void`\>

#### Defined in

[Visitors.ts:10](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L10)

___

### KeyTypes

Ƭ **KeyTypes**: `string` \| `number` \| `symbol`

#### Defined in

[UtilTypes.ts:1](https://github.com/o-development/type-traverser/blob/db4e358/lib/UtilTypes.ts#L1)

___

### PrimitiveInputReturnType

Ƭ **PrimitiveInputReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `return` | `any` |

#### Defined in

[TransformerReturnTypes.ts:52](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L52)

___

### PrimitiveReturnType

Ƭ **PrimitiveReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `return` | `any` |

#### Defined in

[TransformerReturnTypes.ts:15](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L15)

___

### PrimitiveTraverserDefinition

Ƭ **PrimitiveTraverserDefinition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"primitive"`` |

#### Defined in

[TraverserDefinition.ts:16](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserDefinition.ts#L16)

___

### PrimitiveVisitorDefinition

Ƭ **PrimitiveVisitorDefinition**<`Type`, `Context`\>: [`PrimitiveVisitorFunction`](modules.md#primitivevisitorfunction)<`Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`PrimitiveType`](interfaces/PrimitiveType.md) |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:53](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L53)

___

### PrimitiveVisitorFunction

Ƭ **PrimitiveVisitorFunction**<`Type`, `Context`\>: (`originalData`: `Type`[``"type"``], `context`: `Context`) => `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`PrimitiveType`](interfaces/PrimitiveType.md) |
| `Context` | `Context` |

#### Type declaration

▸ (`originalData`, `context`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `originalData` | `Type`[``"type"``] |
| `context` | `Context` |

##### Returns

`Promise`<`void`\>

#### Defined in

[Visitors.ts:48](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L48)

___

### PrimitiveVisitorInputDefinition

Ƭ **PrimitiveVisitorInputDefinition**<`Type`, `Context`\>: [`PrimitiveVisitorFunction`](modules.md#primitivevisitorfunction)<`Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`PrimitiveType`](interfaces/PrimitiveType.md) |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:99](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L99)

___

### RecursivelyFindReturnType

Ƭ **RecursivelyFindReturnType**<`Types`, `InputReturnTypes`, `TypeNameToFind`, `VisitedTypeNames`\>: `TypeNameToFind` extends `VisitedTypeNames` ? `Types`[`TypeNameToFind`][``"type"``] : `InputReturnTypes`[`TypeNameToFind`] extends [`BaseInputReturnType`](modules.md#baseinputreturntype)<`Types`, `Types`[`TypeNameToFind`]\> ? `InputReturnTypes`[`TypeNameToFind`][``"return"``] : [`ApplyTransformerReturnTypeDefault`](modules.md#applytransformerreturntypedefault)<`Types`, `InputReturnTypes`, `TypeNameToFind`, `VisitedTypeNames` \| `TypeNameToFind`\>[``"return"``]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `InputReturnTypes` | extends [`TransformerInputReturnTypes`](modules.md#transformerinputreturntypes)<`Types`\> |
| `TypeNameToFind` | extends keyof `Types` |
| `VisitedTypeNames` | extends keyof `Types` |

#### Defined in

[TransformerReturnTypesDefaults.ts:15](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypesDefaults.ts#L15)

___

### TransformerInputReturnTypes

Ƭ **TransformerInputReturnTypes**<`Types`\>: `Partial`<{ [TypeName in keyof Types]: BaseInputReturnType<Types, TypeName\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |

#### Defined in

[TransformerReturnTypes.ts:67](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L67)

___

### TransformerReturnTypes

Ƭ **TransformerReturnTypes**<`Types`\>: { [TypeName in keyof Types]: BaseReturnType<Types, TypeName\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |

#### Defined in

[TransformerReturnTypes.ts:30](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L30)

___

### TraverserDefinition

Ƭ **TraverserDefinition**<`Types`\>: { [TypeField in keyof Types]: Types[TypeField] extends InterfaceType<keyof Types\> ? InterfaceTraverserDefinition<Types[TypeField]\> : Types[TypeField] extends UnionType<keyof Types\> ? UnionTraverserDefinition<Types[TypeField]\> : Types[TypeField] extends PrimitiveType ? PrimitiveTraverserDefinition : never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |

#### Defined in

[TraverserDefinition.ts:20](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserDefinition.ts#L20)

___

### TraverserTypes

Ƭ **TraverserTypes**<`TypeNames`\>: { [Property in TypeNames]: BaseTraverserTypes<TypeNames\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TypeNames` | extends [`KeyTypes`](modules.md#keytypes) |

#### Defined in

[TraverserTypes.ts:28](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserTypes.ts#L28)

___

### UnionInputReturnType

Ƭ **UnionInputReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `return` | `any` |

#### Defined in

[TransformerReturnTypes.ts:48](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L48)

___

### UnionReturnType

Ƭ **UnionReturnType**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `return` | `any` |

#### Defined in

[TransformerReturnTypes.ts:11](https://github.com/o-development/type-traverser/blob/db4e358/lib/TransformerReturnTypes.ts#L11)

___

### UnionTraverserDefinition

Ƭ **UnionTraverserDefinition**<`Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`UnionType`](interfaces/UnionType.md)<`any`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `kind` | ``"union"`` |
| `selector` | (`item`: `Type`[``"type"``]) => `Type`[``"typeNames"``] |

#### Defined in

[TraverserDefinition.ts:11](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserDefinition.ts#L11)

___

### UnionVisitorDefinition

Ƭ **UnionVisitorDefinition**<`Types`, `Type`, `Context`\>: [`UnionVisitorFunction`](modules.md#unionvisitorfunction)<`Types`, `Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:42](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L42)

___

### UnionVisitorFunction

Ƭ **UnionVisitorFunction**<`Types`, `Type`, `Context`\>: (`originalData`: `Type`[``"type"``], `context`: `Context`) => `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> |
| `Context` | `Context` |

#### Type declaration

▸ (`originalData`, `context`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `originalData` | `Type`[``"type"``] |
| `context` | `Context` |

##### Returns

`Promise`<`void`\>

#### Defined in

[Visitors.ts:36](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L36)

___

### UnionVisitorInputDefinition

Ƭ **UnionVisitorInputDefinition**<`Types`, `Type`, `Context`\>: [`UnionVisitorFunction`](modules.md#unionvisitorfunction)<`Types`, `Type`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Type` | extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:93](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L93)

___

### ValidateTraverserTypes

Ƭ **ValidateTraverserTypes**<`Types`\>: [`AssertExtends`](modules.md#assertextends)<[`TraverserTypes`](modules.md#traversertypes)<keyof `Types`\>, `Types`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |

#### Defined in

[TraverserTypes.ts:32](https://github.com/o-development/type-traverser/blob/db4e358/lib/TraverserTypes.ts#L32)

___

### VisitorDefinition

Ƭ **VisitorDefinition**<`Types`, `TypeName`, `Context`\>: `Types`[`TypeName`] extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> ? [`InterfaceVisitorDefinition`](modules.md#interfacevisitordefinition)<`Types`, `Types`[`TypeName`], `Context`\> : `Types`[`TypeName`] extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> ? [`UnionVisitorDefinition`](modules.md#unionvisitordefinition)<`Types`, `Types`[`TypeName`], `Context`\> : `Types`[`TypeName`] extends [`PrimitiveType`](interfaces/PrimitiveType.md) ? [`PrimitiveVisitorDefinition`](modules.md#primitivevisitordefinition)<`Types`[`TypeName`], `Context`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `TypeName` | extends keyof `Types` |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:58](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L58)

___

### VisitorInputDefinition

Ƭ **VisitorInputDefinition**<`Types`, `TypeName`, `Context`\>: `Types`[`TypeName`] extends [`InterfaceType`](interfaces/InterfaceType.md)<keyof `Types`\> ? [`InterfaceVisitorInputDefinition`](modules.md#interfacevisitorinputdefinition)<`Types`, `Types`[`TypeName`], `Context`\> : `Types`[`TypeName`] extends [`UnionType`](interfaces/UnionType.md)<keyof `Types`\> ? [`UnionVisitorInputDefinition`](modules.md#unionvisitorinputdefinition)<`Types`, `Types`[`TypeName`], `Context`\> : `Types`[`TypeName`] extends [`PrimitiveType`](interfaces/PrimitiveType.md) ? [`PrimitiveVisitorInputDefinition`](modules.md#primitivevisitorinputdefinition)<`Types`[`TypeName`], `Context`\> : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `TypeName` | extends keyof `Types` |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:104](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L104)

___

### Visitors

Ƭ **Visitors**<`Types`, `Context`\>: { [TypeName in keyof Types]: VisitorDefinition<Types, TypeName, Context\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:70](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L70)

___

### VisitorsInput

Ƭ **VisitorsInput**<`Types`, `Context`\>: `Partial`<{ [TypeName in keyof Types]: VisitorInputDefinition<Types, TypeName, Context\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](modules.md#traversertypes)<`any`\> |
| `Context` | `Context` |

#### Defined in

[Visitors.ts:116](https://github.com/o-development/type-traverser/blob/db4e358/lib/Visitors.ts#L116)
