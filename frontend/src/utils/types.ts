import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permissions: string;
    features: string[];
    approximate_member_count: number;
};

export type Command = {
    id: string;
    name: string;
    description: string;
};

export type NextPageWithLayout<T> = NextPage<T> & { getLayout: (page: ReactElement) => ReactNode; };

export type AppPropsWithLayout<T> = AppProps & { Component: NextPageWithLayout<T>; };