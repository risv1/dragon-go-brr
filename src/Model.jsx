import {useAnimations, useGLTF, useScroll} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import { useRef } from 'react'

useGLTF.preload('/chinese_dragon.glb')

export default function Model(){
    const group = useRef(null)
    const { animations, scene } = useGLTF('/chinese_dragon.glb')
    const { actions, clips } = useAnimations(animations, scene)
    const scroll = useScroll()

    useEffect(()=>{
        console.log(actions)
        actions["Take 001"].play().paused = true
    }, [])

    useFrame(()=>{
        actions["Take 001"].time = (actions["Take 001"].getClip().duration * scroll.offset / 3)
    })

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}