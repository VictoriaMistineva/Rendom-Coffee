export type MeetInfoSliceState = {
    meetInfo: MeetInfo;
}
export type MeetInfo = {
    subject: string;
    location: string;
    start: string;
    end: string;
    duration: string;
    date: string;
    jazzLink: string;
    participants: Participants;
}

export type Participants = {
    attendees: Attendee[];
}

export type Attendee = {
    mailboxUser: MailboxUser;
    response: string;
}

export type MailboxUser = {
    name: string;
    address: string;
}
