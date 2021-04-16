import React from 'react';
import './layout.css'
import Friend from '../side-bar/friend';
import Group from '../side-bar/group';

//TODO change input search

const LeftSideBar = () => {
    return (
        <div className="left-side-bar d-none d-md-block">
            <div className="p-4">
                <div className="mb-5">
                    <p className="uppercase">YOUR GROUPS:</p>
                    <Group img="http://www.topoboi.com/pic/201308/1600x1200/topoboi.com-9357.jpg" name="Alice"/>
                    <Group img="https://clipart-best.com/img/rubik-cube/rubik-cube-clip-art-21.png" name="Кубики рубика"  />
                </div>

                <div>
                    <p className="uppercase">YOUR FRIENDS:</p>
                    <Friend img="https://c.wallhere.com/photos/1e/7d/1600x1200_px_action_adventure_alien_Aliens_Avatar_fantasy_fi-1635355.jpg!d"
                    name="Pashka Pidor"
                            IsActive ={true}
                    />
                    <Friend img="https://i.ytimg.com/vi/o7TzfzOsl7A/maxresdefault.jpg"
                            name="Tsikahanu Stsiapan"
                            IsActive ={false}
                    />
                    <Friend img="https://www.freepngimg.com/thumb/facebook/62681-flat-icons-face-computer-design-avatar-icon.png"
                            name="Nikita Avlasenko"
                            IsActive ={true}
                    />
                    <Friend img="https://www.pinclipart.com/picdir/big/49-490443_avatar-icon-tlcharger-avatar-icon-clipart.png"
                            name="Daniil Ermamedov"
                            IsActive ={false}
                    />
                </div>

            </div>

        </div>
    );
};

export default LeftSideBar;