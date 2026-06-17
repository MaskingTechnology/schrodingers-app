
type Data = Record<string, unknown>;
type Handler = (data: Data) => void;

type Event = Set<Handler>;
type Topic = Map<string, Event>;

type Address = { topic: string, event: string};
type Publication = Address & { data: Data };
type Subscription = Address & { handler: Handler };

class EventBroker
{
    readonly #topics = new Map<string, Topic>;

    async publish(publication: Publication): Promise<void>
    {
        this.#getEvent(publication).forEach(handler => handler(publication.data));
    }

    async subscribe(subscription: Subscription): Promise<void>
    {
        this.#getEvent(subscription).add(subscription.handler);
    }

    #getEvent(address: Address): Event
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

export default new EventBroker();
