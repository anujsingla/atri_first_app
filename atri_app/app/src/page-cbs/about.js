import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex9Cb() {
	const onClick = useCallback(callbackFactory("Flex9", "about", "/about", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox4Cb() {
	const onClick = useCallback(callbackFactory("TextBox4", "about", "/about", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox5Cb() {
	const onClick = useCallback(callbackFactory("TextBox5", "about", "/about", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "about", "/about", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}