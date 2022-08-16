import { User } from "./user_class"

export class DefaultDataValidator {
    static checkDefaultData = (query: string, user: User) => {
        const defaultEmail: string = 'default_email@gmail.com'
        const defaultName: string = 'Default User'
        const defaultId: number = 99999

        if (query.includes(defaultEmail) || query.includes(defaultName)) {
            query = query.replace(defaultEmail, user.email)
                        .replace(defaultName, user.name)
            query.includes('female') ? query = query.replace('female', user.gender) : null
        } else if (query.includes(defaultId.toString()))
            query = query.replace(defaultId.toString(), user.id.toString())

        return query;
    }
}