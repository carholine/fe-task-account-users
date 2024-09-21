import usersData from './users.json';

export const fetchUsers = async () => {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return usersData.users;
};
