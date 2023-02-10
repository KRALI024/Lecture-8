/* Lecture 8
 * CSCI 4611, Spring 2023, University of Minnesota
 * Instructor: Evan Suma Rosenberg <suma@umn.edu>
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 */ 

import * as gfx from 'gophergfx'

export class AngryBees extends gfx.GfxApp
{
    private ground: gfx.BoxMesh;
    private skybox: gfx.BoxMesh;
    private bee: gfx.Transform3;

    private beeVelocity: gfx.Vector3;

    constructor()
    {
        super();

        this.ground = new gfx.BoxMesh();
        this.skybox = new gfx.BoxMesh();
        this.bee = new gfx.Transform3();

        this.beeVelocity = new gfx.Vector3();
    }

    createScene(): void 
    {

    }

    update(deltaTime: number): void 
    {

    }
}