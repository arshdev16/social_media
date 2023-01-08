import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { userDocInterface } from './interfaces';

interface UserState {
  user: userDocInterface
  getUserDoc: (by: number) => void
}

// const user = getUser();
// console.log(user)

// const useUserStore = create<UserState>()(
//   devtools(
//     persist(
//       (set) => ({
//         user: {
//             name: null,
//             userId: null,
//             email: null,
//             tag: null,
//             profilePic: null
            
//         } ,
//         getUserDoc: (by) => set(() => (getUser())),
//       }),
//       {
//         name: 'user-storage',
//       }
//     )
//   )
// )