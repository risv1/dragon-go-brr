import {useGLTF} from '@react-three/drei'
import { useRef } from 'react'

useGLTF.preload('../public/chinese_dragon.glb')

export default function Model(){
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('../public/chinese_dragon.glb')

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}