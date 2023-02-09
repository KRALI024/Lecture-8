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

    constructor()
    {
        super();

        this.ground = new gfx.BoxMesh();
        this.skybox = new gfx.BoxMesh();
    }

    createScene(): void 
    {
        // Setup the camera projection matrix and position.
        // We will learn more about camera models later in this course.
        this.camera.setPerspectiveCamera(60, 1920/1080, 0.1, 100);
        this.camera.position.set(0, 1.5, 0);

        // Create an ambient light that illuminates everything in the scene
        const ambientLight = new gfx.AmbientLight(new gfx.Color(0.4, 0.4, 0.4));

        // Create a directional light that is infinitely far away (sunlight)
        const directionalLight = new gfx.DirectionalLight(new gfx.Color(0.6, 0.6, 0.6));
        directionalLight.position.set(1, 2, 1);

        this.ground.position.set(0, -0.5, 0);
        this.ground.scale.set(50, 1, 50);
        this.ground.material.setColor(new gfx.Color(83/255, 209/255, 110/255));

        this.skybox.scale.set(100, 100, 100);
        this.skybox.material = new gfx.UnlitMaterial();
        this.skybox.material.setColor(new gfx.Color(0.698, 1, 1));
        this.skybox.material.side = gfx.Side.BACK;

        this.scene.add(ambientLight);
        this.scene.add(directionalLight);
        this.scene.add(this.ground);
        this.scene.add(this.skybox);
    }

    update(deltaTime: number): void 
    {

    }
}