
export type smallUserCardSliceState = {
    user: Users,
}


export type Users = {
    id: string,
    avatar: string,
    fullName: string,
    position: null,
    department: string,
    birthdayToday: boolean,
    phoneMobile: string,
    phoneInner: string,
    emailExternal: string,
    emailInternal: string,
    emailMain: string,
    teams: Teams[] ,
    isBusy: boolean               
}

export type Teams = {
    deptName: string,
    role?: string
}