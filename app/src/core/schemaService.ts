/**
 * ---------------------------------------------------------------------
 * Copyright (c) 2021 EclipseSource Munich
 * Licensed under MIT
 * https://github.com/eclipsesource/jsonforms-editor/blob/master/LICENSE
 * ---------------------------------------------------------------------
 */
import { SchemaService } from '@jsonforms/editor';

const exampleSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://delta.com/configuration/dynamodb.source.schema.jsonc',
  type: 'object',
  properties: {
    tableName: { type: 'string' },
    operationType: {
      type: 'string',
      enum: ['query', 'scan'],
    },
    query: {
      type: 'object',
      properties: {
        keyConditionExpression: { type: 'string' },
        expressionAttributeNames: { type: 'string' },
        expressionAttributeValues: { type: 'string' },
      },
      required: [
        'keyConditionExpression',
        'expressionAttributeNames',
        'expressionAttributeValues',
      ],
    },
    scan: {
      type: 'object',
      properties: {
        filterExpression: { type: 'string' },
        expressionAttributeNames: { type: 'string' },
        expressionAttributeValues: { type: 'string' },
      },
      required: [
        'filterExpression',
        'expressionAttributeNames',
        'expressionAttributeValues',
      ],
    },
  },
  required: ['tableName', 'operationType'],
  if: {
    properties: { operationType: { const: 'scan' } },
  },
  then: { required: ['scan'] },
  else: {
    if: {
      properties: { operationType: { const: 'query' } },
    },
    then: { required: ['query'] },
  },
};

const exampleUischema = undefined;

export class ExampleSchemaService implements SchemaService {
  getSchema = async () => exampleSchema;
  getUiSchema = async () => exampleUischema;
}
