
type Document = { _id: string; } & Record<string, unknown>;
type Collection<T extends Document> = Map<string, T>;
type Query<T> = Partial<T>;
type Data<T> = Partial<T>;

class Database
{
    readonly #collections = new Map<string, Collection<Document>>();

    async insert<T extends Document>(collectionName: string, document: T): Promise<void>
    {
        this.#getCollection(collectionName).set(document._id, document);
    }

    async find<T extends Document>(collectionName: string, query: Query<T>): Promise<T[]>
    {
        const documents = this.#getCollection<T>(collectionName).values();
        
        const result = documents.filter(document => this.#isMatch(document, query));

        return Array.from(result);
    }

    async findOne<T extends Document>(collectionName: string, query: Query<T>): Promise<T | undefined>
    {
        const documents = this.#getCollection<T>(collectionName).values();

        return documents.find(document => this.#isMatch(document, query));
    }

    async update<T extends Document>(collectionName: string, query: Query<T>, mutations: Data<T>): Promise<void>
    {
        const documents = await this.find<T>(collectionName, query);

        documents.forEach(document => this.#mutate(document, mutations));
    }

    async updateOne<T extends Document>(collectionName: string, query: Query<T>, mutations: Data<T>): Promise<void>
    {
        const document = await this.findOne<T>(collectionName, query);

        if (document === undefined)
        {
            return;
        }

        this.#mutate(document, mutations);
    }

    async delete<T extends Document>(collectionName: string, query: Query<T>): Promise<void>
    {
        const document = await this.findOne<T>(collectionName, query);

        if (document === undefined)
        {
            return;
        }

        this.#getCollection(collectionName).delete(document._id);
    }

    async deleteMany<T extends Document>(collectionName: string, query: Query<T>): Promise<void>
    {
        const collection = this.#getCollection<T>(collectionName);
        const documents = await this.find<T>(collectionName, query);

        documents.forEach(document => collection.delete(document._id));
    }

    #getCollection<T extends Document>(name: string): Collection<T>
    {
        let collection = this.#collections.get(name);

        if (collection === undefined)
        {
            collection = new Map();

            this.#collections.set(name, collection);
        }

        return collection as Collection<T>;
    }

    #isMatch<T extends Document>(document: T, query: Query<T>): boolean
    {
        const queryEntries = Object.entries(query);

        for (const [key, value] of queryEntries)
        {
            if (document[key] !== value)
            {
                return false;
            }
        }

        return true;
    }

    #mutate<T extends Document>(document: Document, mutations: Data<T>): void
    {
        const dataEntries = Object.entries(mutations);

        for (const [key, value] of dataEntries)
        {
            document[key] = value;
        }
    }
}

export const database = new Database();
