import faker from 'faker';

export class User {
    name: string
    email: string
    gender: string = 'male' || 'female'
    id?: number
    status: string = 'active' || 'inactive'
}

export class UserGenerator {
    static GenerateUser = () => {
        const user: User = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            gender: faker.random.arrayElement(['male', 'female']),
            status: 'active',
        }
        
        return user;
    }
}