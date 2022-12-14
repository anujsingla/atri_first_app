import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex9Cb, useTextBox4Cb, useTextBox5Cb, useButton2Cb } from "../page-cbs/about";
import "../page-css/about.css"

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex9Props = useStore((state)=>state["about"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["about"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const TextBox4Props = useStore((state)=>state["about"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["about"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["about"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["about"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Button2Props = useStore((state)=>state["about"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["about"]["Button2"]);
const Button2Cb = useButton2Cb()

  return (<>
  <Flex1 className="p-about Flex9" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox1 className="p-about TextBox4" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox1 className="p-about TextBox5" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Button1 className="p-about Button2" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
  </>);
}
