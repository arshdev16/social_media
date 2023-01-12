"use client";
import React from 'react'
import { useUserContext } from '../../lib/Context'

type Props = {}

const Profile = (props: Props) => {
  const {email} = useUserContext()
  return (
    <div></div>
  )
}

export default Profile