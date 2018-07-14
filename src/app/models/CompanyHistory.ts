export interface Links {
    reddit: string;
    article: string;
    wikipedia: string;
}

export interface CompanyHistory {
    title: string;
    event_date_utc: Date;
    flight_number?: number;
    details: string;
    links: Links;
}