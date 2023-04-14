import Link from "next/link";
import { Wrap, Title } from "../styles/index";

export default function Qqq() {

    return (
        <div style={{marginTop: '100px'}}>
            <Wrap>
                <Title>Day-01</Title>
                <Link href="/01-01-qqq">01-qqq</Link>
                <Link href="/01-02-emotion">02-emotion</Link>
            </Wrap>
            <Wrap>
                <Title>Day-02</Title>
                <Link href="/02-01-counter-let-doc">01-counter-let-doc</Link>
                <Link href="/02-02-counter-state">02-counter-state</Link>
                <Link href="/02-03-signup-state">03-signup-state</Link>
            </Wrap>
            <Wrap>
                <Title>Day-04</Title>
                <Link href="/04-01-rest-get">01-rest-get</Link>
                <Link href="/04-02-gql-mutation">02-gql-mutation</Link>
                <Link href="/04-03-gql-mutation-args">03-gql-mutation-args</Link>
                <Link href="/04-04-gql-mutation-input">04-gql-mutation-input</Link>
                <Link href="/04-05-gql-mutation-product">05-gql-mutation-product</Link>
            </Wrap>
        </div>
    )
} 