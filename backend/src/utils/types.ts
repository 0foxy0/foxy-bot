export type PartialGuild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
    approximate_member_count: number;
};

export type PartialCommand = {
    id: string;
    name: string;
    description: string;
};