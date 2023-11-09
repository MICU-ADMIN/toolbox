import { useRouter } from 'next/router';
impor

import React from 'react'
import Main from './page.main';
import Edit from './page.edit';



const Home = () => {
  const router = useRouter();
  const { edit } = router.query;
// https://yourwebsite.com/yourPage?myParam=paramValue


if (!edit)  {
  return (
<Main/> 
    )
} else {
  <Edit/>
}
} 

export default Home
