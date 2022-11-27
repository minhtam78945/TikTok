import Button from '~/Compontens/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItems({ data }) {
    return (
        <Button className = {cx('menu-item')} Menuitem LeftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;