
type Document = Record<string, unknown> & { _id: string; };
type Collection = Map<string, Document>;
type Query = Record<string, unknown>;

class Database
{
    readonly #collections = new Map<string, Collection>();

    async create<T extends Document>(collectionName: string, document: T): Promise<void>
    {
        this.#getCollection(collectionName).set(document._id, document);
    }

    async find(collectionName: string, query: Query): Promise<Document[]>
    {
        const documents = this.#getCollection(collectionName).values();
        
        const result = documents.filter(document => this.#isMatch(document, query));

        return Array.from(result);
    }

    async findOne(collectionName: string, query: Query): Promise<Document | undefined>
    {
        const documents = this.#getCollection(collectionName).values();

        return documents.find(document => this.#isMatch(document, query));
    }

    async delete(collectionName: string, query: Query): Promise<void>
    {
        const document = await this.findOne(collectionName, query);

        if (document === undefined)
        {
            return;
        }

        this.#getCollection(collectionName).delete(document._id);
    }

    async deleteMany(collectionName: string, query: Query): Promise<void>
    {
        const collection = this.#getCollection(collectionName);
        const documents = await this.find(collectionName, query);

        documents.forEach(document => collection.delete(document._id));
    }

    #getCollection(name: string): Collection
    {
        let collection = this.#collections.get(name);

        if (collection === undefined)
        {
            collection = new Map();

            this.#collections.set(name, collection);
        }

        return collection;
    }

    #isMatch(document: Document, query: Query): boolean
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
}

export default new Database();
