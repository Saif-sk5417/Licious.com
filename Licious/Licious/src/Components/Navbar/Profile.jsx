import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    Button,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
//   import {ChevronDownIcon} from "@chakra-ui/icons"

const Profile = () => {

  return (
    <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton bg="#fff"  border="0px solid #f8f8f8" outline="none" isActive={isOpen} as={Button} >
          {isOpen ? 'Login' : 'Login'}
        </MenuButton>
        <MenuList outline={"none"} border="0px solie #f8f8f8" fontSize={"12px"}>
          <MenuItem>Account</MenuItem>
          <MenuItem>My Reward</MenuItem>
          <MenuItem>My Offer</MenuItem>
          <MenuItem>Refer a Friend</MenuItem>
          <MenuItem onClick={() => alert('Kagebunshin')}>Logout</MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
  )
}

export default Profile