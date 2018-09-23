import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const technologies = [
            { id: 11, name: 'Component' },
            { id: 12, name: 'Module' },
            { id: 13, name: 'Service' },
            { id: 14, name: 'Directive' },
            { id: 15, name: 'Pipe' },
            { id: 16, name: 'Data Binding' },
            { id: 17, name: 'Interpolation' },
            { id: 11, name: 'Property' },
            { id: 11, name: 'Event' },
            { id: 11, name: '2-Way Binding' },
    ];
    return { technologies };
    }

}
