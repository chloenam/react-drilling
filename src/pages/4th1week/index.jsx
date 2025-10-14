import React from "react";
import "./index.css";
import CounterDisplay from "../../components/designpattern/CustomHook/CounterView";
import UserContainer from "../../components/designpattern/ContainerPresenter/UserContainer";
import TodoList from "../../components/designpattern/StateColocation/TodoList";
import { Tabs } from "../../components/designpattern/CompoundComponents/Tabs";
import CounterApp from "../../components/designpattern/ContextReducer/CounterApp";
import InputExample from "../../components/designpattern/Controlled/InputExample";
import RenderPropsVsPropsGetter from "../../components/designpattern/RenderPropsVsPropsGetter/RenderPropsVsPropsGetter";

export default function DesignPattern() {
  return (
    <div className="section__patterns">
      <CounterDisplay />
      <UserContainer />
      <TodoList />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab index={0} label="탭1" />
          <Tabs.Tab index={1} label="탭2" />
        </Tabs.List>
        <Tabs.Panel index={0}>탭1 내용</Tabs.Panel>
        <Tabs.Panel index={1}>탭2 내용</Tabs.Panel>
      </Tabs>
      <CounterApp />
      <InputExample />
      <RenderPropsVsPropsGetter />
    </div>
  );
}
