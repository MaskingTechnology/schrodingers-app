
type Data = Record<string, unknown>;
type Handler<T extends Data> = (data: T) => void;

type Event<T extends Data> = Set<Handler<T>>;
type Topic = Map<string, Event<Data>>;

type Address = { topic: string, event: string};
type Publication<T extends Data> = Address & { data: T };
type Subscription<T extends Data> = Address & { handler: Handler<T> };

class EventBroker
{
    readonly #topics = new Map<string, Topic>;

    async publish<T extends Data>(publication: Publication<T>): Promise<void>
    {
        this.#getEvent<T>(publication).forEach(handler => handler(publication.data));
    }

    async subscribe<T extends Data>(subscription: Subscription<T>): Promise<void>
    {
        this.#getEvent<T>(subscription).add(subscription.handler);
    }

    #getEvent<T extends Data>(address: Address): Event<T>
    {
        const topic = this.#getTopic(address.topic);

        let event = topic.get(address.event);

        if (event === undefined)
        {
            event = new Set();

            topic.set(address.event, event);
        }

        return event;
    }

    #getTopic(name: string): Topic
    {
        let topic = this.#topics.get(name);

        if (topic === undefined)
        {
            topic = new Map();

            this.#topics.set(name, topic);
        }

        return topic;
    }
}

export const eventBroker = new EventBroker();
