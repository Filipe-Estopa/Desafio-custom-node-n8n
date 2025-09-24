"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'random',
            icon: 'file:random.svg',
            group: ['transform'],
            version: 1,
            description: 'Gera números aleatórios usando Random.org',
            defaults: {
                name: 'Random',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    options: [
                        {
                            name: 'True Random Number Generator',
                            value: 'trueRandomNumberGenerator',
                            description: 'Gera um número aleatório entre Min e Max usando Random.org',
                        },
                    ],
                    default: 'trueRandomNumberGenerator',
                },
                {
                    displayName: 'Min',
                    name: 'min',
                    type: 'number',
                    default: 1,
                },
                {
                    displayName: 'Max',
                    name: 'max',
                    type: 'number',
                    default: 60,
                },
            ],
        };
    }
    async execute() {
        const operation = this.getNodeParameter('operation', 0);
        if (operation === 'trueRandomNumberGenerator') {
            const min = this.getNodeParameter('min', 0);
            const max = this.getNodeParameter('max', 0);
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`,
            });
            const number = parseInt(response.toString().trim(), 10);
            return [this.helpers.returnJsonArray([{ randomNumber: number }])];
        }
        return [];
    }
}
exports.Random = Random;
