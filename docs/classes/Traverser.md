[type-traverser](../README.md) / [Exports](../modules.md) / Traverser

# Class: Traverser<Types\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](../modules.md#traversertypes)<`any`\> |

## Table of contents

### Constructors

- [constructor](Traverser.md#constructor)

### Properties

- [traverserDefinition](Traverser.md#traverserdefinition)

### Methods

- [createTransformer](Traverser.md#createtransformer)
- [createVisitor](Traverser.md#createvisitor)

## Constructors

### constructor

• **new Traverser**<`Types`\>(`traverserDefinition`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Types` | extends [`TraverserTypes`](../modules.md#traversertypes)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `traverserDefinition` | [`TraverserDefinition`](../modules.md#traverserdefinition)<`Types`\> |

#### Defined in

[Traverser.ts:18](https://github.com/o-development/type-traverser/blob/db4e358/lib/Traverser.ts#L18)

## Properties

### traverserDefinition

• `Private` **traverserDefinition**: [`TraverserDefinition`](../modules.md#traverserdefinition)<`Types`\>

#### Defined in

[Traverser.ts:16](https://github.com/o-development/type-traverser/blob/db4e358/lib/Traverser.ts#L16)

## Methods

### createTransformer

▸ **createTransformer**<`ReturnTypes`, `Context`\>(`transformers`): [`Transformer`](Transformer.md)<`Types`, `ReturnTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ReturnTypes` | extends `Partial`<{ [TypeName in string \| number \| symbol]: BaseInputReturnType<Types, TypeName\> }\> |
| `Context` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformers` | `Partial`<{ [TypeName in string \| number \| symbol]: undefined extends ReturnTypes[TypeName] ? TransformerInputDefinition<Types, ApplyTransformerReturnTypesDefaults<Types, ReturnTypes\>, TypeName, Context\> \| ReturnTypes[TypeName] & undefined : TransformerInputDefinition<Types, ApplyTransformerReturnTypesDefaults<Types, ReturnTypes\>, TypeName, Context\> }\> |

#### Returns

[`Transformer`](Transformer.md)<`Types`, `ReturnTypes`, `Context`\>

#### Defined in

[Traverser.ts:22](https://github.com/o-development/type-traverser/blob/db4e358/lib/Traverser.ts#L22)

___

### createVisitor

▸ **createVisitor**<`Context`\>(`visitors`): [`Visitor`](Visitor.md)<`Types`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Context` | `undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `visitors` | `Partial`<{ [TypeName in string \| number \| symbol]: VisitorInputDefinition<Types, TypeName, Context\> }\> |

#### Returns

[`Visitor`](Visitor.md)<`Types`, `Context`\>

#### Defined in

[Traverser.ts:32](https://github.com/o-development/type-traverser/blob/db4e358/lib/Traverser.ts#L32)
