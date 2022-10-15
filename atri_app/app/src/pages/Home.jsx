import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { useFlex1Cb, useFlex5Cb, useFlex6Cb, useFlex7Cb, useFlex8Cb, useLink4Cb, useLink5Cb, useLink6Cb, useLink7Cb, useTextBox3Cb, useButton1Cb, useCarousel1Cb, useTextBox2Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
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

  const Flex1Props = useStore((state)=>state["Home"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Home"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Flex5Props = useStore((state)=>state["Home"]["Flex5"]);
const Flex5IoProps = useIoStore((state)=>state["Home"]["Flex5"]);
const Flex5Cb = useFlex5Cb()
const Flex6Props = useStore((state)=>state["Home"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["Home"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["Home"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["Home"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Link4Props = useStore((state)=>state["Home"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["Home"]["Link4"]);
const Link4Cb = useLink4Cb()
const Link5Props = useStore((state)=>state["Home"]["Link5"]);
const Link5IoProps = useIoStore((state)=>state["Home"]["Link5"]);
const Link5Cb = useLink5Cb()
const Link6Props = useStore((state)=>state["Home"]["Link6"]);
const Link6IoProps = useIoStore((state)=>state["Home"]["Link6"]);
const Link6Cb = useLink6Cb()
const Link7Props = useStore((state)=>state["Home"]["Link7"]);
const Link7IoProps = useIoStore((state)=>state["Home"]["Link7"]);
const Link7Cb = useLink7Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Carousel1Props = useStore((state)=>state["Home"]["Carousel1"]);
const Carousel1IoProps = useIoStore((state)=>state["Home"]["Carousel1"]);
const Carousel1Cb = useCarousel1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()

  return (<>
  <Flex className="p-Home Flex1" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Flex className="p-Home Flex5" {...Flex5Props} {...Flex5Cb} {...Flex5IoProps}>
<Link className="p-Home Link4" {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
</Flex>
<Flex className="p-Home Flex6" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Link className="p-Home Link5" {...Link5Props} {...Link5Cb} {...Link5IoProps}/>
<Link className="p-Home Link6" {...Link6Props} {...Link6Cb} {...Link6IoProps}/>
<Link className="p-Home Link7" {...Link7Props} {...Link7Cb} {...Link7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex7" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Carousel className="p-Home Carousel1" {...Carousel1Props} {...Carousel1Cb} {...Carousel1IoProps}/>
<Flex className="p-Home Flex8" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox className="p-Home TextBox2" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
</Flex>
<TextBox className="p-Home TextBox3" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
<Button className="p-Home Button1" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
  </>);
}
