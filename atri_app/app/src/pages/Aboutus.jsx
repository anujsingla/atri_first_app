import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex9Cb, useFlex28Cb, useFlex26Cb, useFlex27Cb, useTextBox4Cb, useTextBox5Cb, useButton2Cb, useLink21Cb, useLink22Cb, useLink23Cb, useLink24Cb } from "../page-cbs/aboutus";
import "../page-css/aboutus.css"

export default function Aboutus() {
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

  const Flex9Props = useStore((state)=>state["aboutus"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["aboutus"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex28Props = useStore((state)=>state["aboutus"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["aboutus"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Flex26Props = useStore((state)=>state["aboutus"]["Flex26"]);
const Flex26IoProps = useIoStore((state)=>state["aboutus"]["Flex26"]);
const Flex26Cb = useFlex26Cb()
const Flex27Props = useStore((state)=>state["aboutus"]["Flex27"]);
const Flex27IoProps = useIoStore((state)=>state["aboutus"]["Flex27"]);
const Flex27Cb = useFlex27Cb()
const TextBox4Props = useStore((state)=>state["aboutus"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["aboutus"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["aboutus"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["aboutus"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Button2Props = useStore((state)=>state["aboutus"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["aboutus"]["Button2"]);
const Button2Cb = useButton2Cb()
const Link21Props = useStore((state)=>state["aboutus"]["Link21"]);
const Link21IoProps = useIoStore((state)=>state["aboutus"]["Link21"]);
const Link21Cb = useLink21Cb()
const Link22Props = useStore((state)=>state["aboutus"]["Link22"]);
const Link22IoProps = useIoStore((state)=>state["aboutus"]["Link22"]);
const Link22Cb = useLink22Cb()
const Link23Props = useStore((state)=>state["aboutus"]["Link23"]);
const Link23IoProps = useIoStore((state)=>state["aboutus"]["Link23"]);
const Link23Cb = useLink23Cb()
const Link24Props = useStore((state)=>state["aboutus"]["Link24"]);
const Link24IoProps = useIoStore((state)=>state["aboutus"]["Link24"]);
const Link24Cb = useLink24Cb()

  return (<>
  <Flex1 className="p-aboutus Flex28" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<Flex1 className="p-aboutus Flex27" {...Flex27Props} {...Flex27Cb} {...Flex27IoProps}>
<Link1 className="p-aboutus Link24" {...Link24Props} {...Link24Cb} {...Link24IoProps}/>
</Flex1>
<Flex1 className="p-aboutus Flex26" {...Flex26Props} {...Flex26Cb} {...Flex26IoProps}>
<Link1 className="p-aboutus Link23" {...Link23Props} {...Link23Cb} {...Link23IoProps}/>
<Link1 className="p-aboutus Link22" {...Link22Props} {...Link22Cb} {...Link22IoProps}/>
<Link1 className="p-aboutus Link21" {...Link21Props} {...Link21Cb} {...Link21IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-aboutus Flex9" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<TextBox1 className="p-aboutus TextBox4" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox1 className="p-aboutus TextBox5" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Button1 className="p-aboutus Button2" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
  </>);
}
