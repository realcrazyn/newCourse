import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavparProps {
  className?: string
}

export const Navbar = ({ className }: NavparProps) => {
  const { t } = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        rerum possimus, dolores nisi nihil voluptatem hic porro. Similique quasi
        omnis, nostrum ex beatae fugit ducimus! Aliquid necessitatibus vitae
        laboriosam quos.
      </Modal>
    </div>
  )
}
