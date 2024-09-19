import React from 'react';
import UserListHeader from '../UserListHeader/UserListHeader';

interface UserListContextType {
    areAllUsersSelected: boolean;
    onCheckAllUsers: () => void;
}

interface RowsContainerProps {
    children: React.ReactNode;
    areAllUsersSelected?: boolean;
    onCheckAllUsers?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UserListContext = React.createContext<UserListContextType>({
    areAllUsersSelected: false,
    onCheckAllUsers: () => {},
});

/**
 * This component was created to combine the rows with the sticky header.
 * It needs to use the context to keep the component's stability when the props are changing.
 * The ref is needed for the react-window to ensure that all of the child elements are properly sized.
 */
export const RowsContainer = React.forwardRef<
    HTMLDivElement,
    RowsContainerProps
>(({ children, ...rest }, ref) => {
    const { areAllUsersSelected, onCheckAllUsers } =
        React.useContext(UserListContext);
    return (
        <div ref={ref} {...rest}>
            <UserListHeader
                checked={areAllUsersSelected}
                onChange={onCheckAllUsers}
            />
            {children}
        </div>
    );
});

RowsContainer.displayName = 'InnerElementType';
