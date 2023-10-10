
export type smallUserCardSliceState = {
    user: Users,
    avatar: string,
}


export type Users = {
    id: string,
    avatar: string,
    fullName: string,
    position: null,
    departament: string,
    birthdayToday: boolean,
    phoneMobile: string,
    phoneInner: string,
    emailExternal: string,
    emailInternal: string,
    emailMain: string,
    team: Team                
}

export type Team = {
    deptName: string,
    role?: string
}