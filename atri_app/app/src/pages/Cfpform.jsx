import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { useFlex10Cb, useFlex11Cb, useFlex12Cb, useDiv1Cb, useDiv2Cb, useFlex13Cb, useDiv3Cb, useDiv4Cb, useFlex14Cb, useDiv5Cb, useDiv6Cb, useFlex15Cb, useDiv8Cb, useFlex31Cb, useFlex29Cb, useFlex30Cb, useTextBox6Cb, useTextBox7Cb, useInput3Cb, useInput4Cb, useTextBox8Cb, useTextBox9Cb, useInput1Cb, useButton3Cb, useButton4Cb, useLink25Cb, useLink26Cb, useLink27Cb, useLink28Cb } from "../page-cbs/cfpform";
import "../page-css/cfpform.css"

export default function Cfpform() {
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

  const Flex10Props = useStore((state)=>state["cfpform"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["cfpform"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex11Props = useStore((state)=>state["cfpform"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["cfpform"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Flex12Props = useStore((state)=>state["cfpform"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["cfpform"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div1Props = useStore((state)=>state["cfpform"]["Div1"]);
const Div1IoProps = useIoStore((state)=>state["cfpform"]["Div1"]);
const Div1Cb = useDiv1Cb()
const Div2Props = useStore((state)=>state["cfpform"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["cfpform"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Flex13Props = useStore((state)=>state["cfpform"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["cfpform"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div3Props = useStore((state)=>state["cfpform"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["cfpform"]["Div3"]);
const Div3Cb = useDiv3Cb()
const Div4Props = useStore((state)=>state["cfpform"]["Div4"]);
const Div4IoProps = useIoStore((state)=>state["cfpform"]["Div4"]);
const Div4Cb = useDiv4Cb()
const Flex14Props = useStore((state)=>state["cfpform"]["Flex14"]);
const Flex14IoProps = useIoStore((state)=>state["cfpform"]["Flex14"]);
const Flex14Cb = useFlex14Cb()
const Div5Props = useStore((state)=>state["cfpform"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["cfpform"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div6Props = useStore((state)=>state["cfpform"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["cfpform"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Flex15Props = useStore((state)=>state["cfpform"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["cfpform"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Div8Props = useStore((state)=>state["cfpform"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["cfpform"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Flex31Props = useStore((state)=>state["cfpform"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["cfpform"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex29Props = useStore((state)=>state["cfpform"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["cfpform"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex30Props = useStore((state)=>state["cfpform"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["cfpform"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const TextBox6Props = useStore((state)=>state["cfpform"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["cfpform"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["cfpform"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["cfpform"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const Input3Props = useStore((state)=>state["cfpform"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["cfpform"]["Input3"]);
const Input3Cb = useInput3Cb()
const Input4Props = useStore((state)=>state["cfpform"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["cfpform"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox8Props = useStore((state)=>state["cfpform"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["cfpform"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["cfpform"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["cfpform"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const Input1Props = useStore((state)=>state["cfpform"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["cfpform"]["Input1"]);
const Input1Cb = useInput1Cb()
const Button3Props = useStore((state)=>state["cfpform"]["Button3"]);
const Button3IoProps = useIoStore((state)=>state["cfpform"]["Button3"]);
const Button3Cb = useButton3Cb()
const Button4Props = useStore((state)=>state["cfpform"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["cfpform"]["Button4"]);
const Button4Cb = useButton4Cb()
const Link25Props = useStore((state)=>state["cfpform"]["Link25"]);
const Link25IoProps = useIoStore((state)=>state["cfpform"]["Link25"]);
const Link25Cb = useLink25Cb()
const Link26Props = useStore((state)=>state["cfpform"]["Link26"]);
const Link26IoProps = useIoStore((state)=>state["cfpform"]["Link26"]);
const Link26Cb = useLink26Cb()
const Link27Props = useStore((state)=>state["cfpform"]["Link27"]);
const Link27IoProps = useIoStore((state)=>state["cfpform"]["Link27"]);
const Link27Cb = useLink27Cb()
const Link28Props = useStore((state)=>state["cfpform"]["Link28"]);
const Link28IoProps = useIoStore((state)=>state["cfpform"]["Link28"]);
const Link28Cb = useLink28Cb()

  return (<>
  <Flex2 className="p-cfpform Flex31" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Flex2 className="p-cfpform Flex30" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Link2 className="p-cfpform Link28" {...Link28Props} {...Link28Cb} {...Link28IoProps}/>
</Flex2>
<Flex2 className="p-cfpform Flex29" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Link2 className="p-cfpform Link27" {...Link27Props} {...Link27Cb} {...Link27IoProps}/>
<Link2 className="p-cfpform Link26" {...Link26Props} {...Link26Cb} {...Link26IoProps}/>
<Link2 className="p-cfpform Link25" {...Link25Props} {...Link25Cb} {...Link25IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-cfpform Flex10" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex2 className="p-cfpform Flex11" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox2 className="p-cfpform TextBox6" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
</Flex2>
<Flex2 className="p-cfpform Flex12" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Div className="p-cfpform Div1" {...Div1Props} {...Div1Cb} {...Div1IoProps}>
<TextBox2 className="p-cfpform TextBox7" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Div>
<Div className="p-cfpform Div2" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<Input className="p-cfpform Input3" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Div>
</Flex2>
<Flex2 className="p-cfpform Flex13" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<Div className="p-cfpform Div4" {...Div4Props} {...Div4Cb} {...Div4IoProps}>
<TextBox2 className="p-cfpform TextBox8" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Div>
<Div className="p-cfpform Div3" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<Input className="p-cfpform Input4" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Div>
</Flex2>
<Flex2 className="p-cfpform Flex14" {...Flex14Props} {...Flex14Cb} {...Flex14IoProps}>
<Div className="p-cfpform Div5" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<TextBox2 className="p-cfpform TextBox9" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Div>
<Div className="p-cfpform Div6" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<Input className="p-cfpform Input1" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Div>
</Flex2>
<Flex2 className="p-cfpform Flex15" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Div className="p-cfpform Div8" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Button2 className="p-cfpform Button4" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Button2 className="p-cfpform Button3" {...Button3Props} {...Button3Cb} {...Button3IoProps}/>
</Div>
</Flex2>
</Flex2>
  </>);
}
