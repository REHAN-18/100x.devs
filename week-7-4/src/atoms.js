import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default :107
})

export const jobAtom = atom({
    key: "jobAtom",
    default :0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default :12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default :10
})

export const totalNotificationCount=selector({
    key: "totalNotificationCount",
    value : ({get})=>{
        const networkAtomCount= get(networkAtom);
        const jobAtomCount= get(jobAtom);
        const notificationAtomCount= get(notificationAtom);
        const messagingAtomCount= get(messagingAtom);

        return  networkAtom + jobAtom + notificationAtom + messagingAtom
    }

})