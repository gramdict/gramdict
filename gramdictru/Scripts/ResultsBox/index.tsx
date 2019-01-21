import { ApplicationState } from "../ApplicationState/index";
import { observer } from "mobx-react";
import * as React from "react";
import styled from "styled-components";

export interface IResultBoxProps {
    applicationState: ApplicationState
}

const ResultsTable = styled.table`
    width: 100%;
`;

const Lemma = styled.td`
    text-align: left;
    width: 25%;
`;

const Symbol = styled.td`
    text-align: left;
    width: 10%;
`;

const Grammar = styled.td`
    text-align: left;
`;

@observer
export class ResultsBox extends React.Component<IResultBoxProps> {
    render() {
        console.log(this.props.applicationState.results);
        return <ResultsTable>
            <tbody>
                {this.props.applicationState.results.map(r => <tr>
                    <Lemma>{r.lemma}</Lemma>
                    <Symbol>{r.symbol}</Symbol>
                    <Grammar>{r.grammar}</Grammar>
                </tr>)}
            </tbody>
        </ResultsTable>;
    }
}
