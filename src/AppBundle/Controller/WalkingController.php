<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Walking;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Walking controller.
 *
 * @Route("walking")
 */
class WalkingController extends Controller
{
    /**
     * Lists all walking entities.
     *
     * @Route("/index", name="walking_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $walkings = $em->getRepository('AppBundle:Walking')->findBy(array(), array('date' => 'desc'));

        return $this->render('walking/index.html.twig', array(
            'walkings' => $walkings,
        ));
    }

    /**
     * Creates a new walking entity.
     *
     * @Route("/new", name="walking_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $walking = new Walking();
        $form = $this->createForm('AppBundle\Form\WalkingType', $walking);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($walking);
            $em->flush();

            return $this->redirectToRoute('walking_show', array('id' => $walking->getId()));
        }

        return $this->render('walking/new.html.twig', array(
            'walking' => $walking,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a walking entity.
     *
     * @Route("/show/{id}", name="walking_show")
     * @Method("GET")
     */
    public function showAction(Walking $walking)
    {
        $showForm = $this->createForm('AppBundle\Form\WalkingType', $walking);

        return $this->render('walking/show.html.twig', array(
            'walking' => $walking,
            'show_form' => $showForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing walking entity.
     *
     * @Route("/edit/{id}", name="walking_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Walking $walking)
    {
        $editForm = $this->createForm('AppBundle\Form\WalkingType', $walking);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('walking_show', array('id' => $walking->getId()));
        }

        return $this->render('walking/edit.html.twig', array(
            'walking' => $walking,
            'edit_form' => $editForm->createView(),
        ));
    }

    /**
     * Deletes a walking entity.
     *
     * @Route("/delete/{id}", name="walking_delete")
     * @Method({"GET", "POST"})
     */
    public function deleteAction(Request $request, Walking $walking)
    {
        $em = $this
            ->getDoctrine()
            ->getManager();

        $walking = $em
            ->getRepository('AppBundle:Walking')
            ->find($walking->getId());

        $em->remove($walking);

        $em->flush();

        return $this->redirectToRoute('walking_index');
    }

    /**
     * Deletes a walking entity.
     *
     * @Route("/row/{id}", name="walking_row")
     * @Method({"GET", "POST"})
     */
    public function rowAction($id)
    {
        $em = $this
                ->getDoctrine()
                ->getManager()
                ->getRepository('AppBundle:Walking');

        $walking = $em->findOneById($id);
        $row = json_encode(array('distance'=>$walking->getDistance(), 'step' => $walking->getStep(), 'date' => $walking->getDate()));
        return new Response($row);

    }

   /**
     * list last rows
     *
     * @Route("/lastrows", name="walking_lastrows")
     * @Method({"GET", "POST"})
     */
    public function lastrowsAction(){
        
        $em = $this->getDoctrine()->getManager();

        $walkings = $em->getRepository('AppBundle:Walking')->findBy(array(), array('date' => 'desc'));

        $lastrows = json_encode($walkings);

        //$type = gettype($lastrows);

        return new Response($lastrows);
               
    }
}
