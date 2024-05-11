import { extendSchema, type GraphQLSchema } from 'graphql';
import { CodeFileLoader } from '@graphql-tools/code-file-loader';
import { type Transform } from '@graphql-tools/delegate';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadTypedefsSync } from '@graphql-tools/load';

export default class TypeDefsTransform implements Transform {
    public noWrap: boolean = false;
    private readonly baseDir: string;
    private readonly typeDefs: any[];

    constructor({ baseDir, config }: { baseDir: string; config: any[] }) {
        this.baseDir = baseDir;
        this.typeDefs = config;
    }

    transformSchema(originalWrappingSchema: GraphQLSchema) {
        let newSchema = originalWrappingSchema;
        for (const typeDef of this.typeDefs) {
            const additionalTypeDefs = loadTypedefsSync(typeDef, {
                cwd: this.baseDir,
                loaders: [new CodeFileLoader(), new GraphQLFileLoader()],
            });

            if (additionalTypeDefs) {
                newSchema = extendSchema(originalWrappingSchema, additionalTypeDefs[0].document);
            }
        }

        return newSchema;
    }
}
