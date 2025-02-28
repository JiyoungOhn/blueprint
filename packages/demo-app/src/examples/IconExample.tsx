/* Copyright 2021 Palantir Technologies, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.*/

import * as React from "react";

import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

import { ExampleCard } from "./ExampleCard";

export class IconExample extends React.PureComponent {
    public render() {
        return (
            <div className="example-row">
                <ExampleCard label="Icon" horizontal={true}>
                    {Object.values(Intent).map(intent => (
                        <Icon key={`${intent}-icon`} intent={intent} icon={IconNames.ADD} />
                    ))}
                </ExampleCard>
            </div>
        );
    }
}
