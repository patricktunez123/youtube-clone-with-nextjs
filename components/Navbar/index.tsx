import React from 'react'
import { Button, Input } from 'antd';
import { MdKeyboardVoice, MdOutlineApps } from 'react-icons/md'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { BiUserCircle } from 'react-icons/bi'
const { Search } = Input;

const Navbar = () => {
    const onSearch = (value: any) => console.log(value);

    return (
        <div className='app_navbar app_padding_tb'>
            <div className='nav_search'>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
                <MdKeyboardVoice className='nav_icon' />
            </div>
            <div className='nav_profile'>
                <MdOutlineApps className='nav_icon' />
                <HiOutlineDotsVertical className='nav_icon' />
                <Button type="primary" icon={<BiUserCircle />}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}

export default Navbar
