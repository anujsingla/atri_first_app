import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex9Cb() {
	const onClick = useCallback(callbackFactory("Flex9", "aboutus", "/aboutus", "onClick", 
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
	const onClick = useCallback(callbackFactory("TextBox4", "aboutus", "/aboutus", "onClick", 
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
	const onClick = useCallback(callbackFactory("TextBox5", "aboutus", "/aboutus", "onClick", 
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
	const onClick = useCallback(callbackFactory("Button2", "aboutus", "/aboutus", "onClick", 
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
export function useLink21Cb() {

	return {  }
}
export function useLink22Cb() {

	return {  }
}
export function useLink23Cb() {

	return {  }
}
export function useLink24Cb() {

	return {  }
}
export function useFlex26Cb() {
	const onClick = useCallback(callbackFactory("Flex26", "aboutus", "/aboutus", "onClick", 
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
export function useFlex27Cb() {
	const onClick = useCallback(callbackFactory("Flex27", "aboutus", "/aboutus", "onClick", 
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
export function useFlex28Cb() {
	const onClick = useCallback(callbackFactory("Flex28", "aboutus", "/aboutus", "onClick", 
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